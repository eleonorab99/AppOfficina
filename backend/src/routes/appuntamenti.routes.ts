import express, { Request, Response, NextFunction } from "express";
import { PrismaClient, Prisma, StatoAppuntamento } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { authenticateAdmin } from "../middleware/auth";

const router = express.Router();
const prisma = new PrismaClient();

// Definizione dei tipi per le richieste
type CreateAppuntamentoRequest = {
  data: Date | string;
  ora: Date | string;
  durata: number;
  note?: string | null;
  stato?: StatoAppuntamento;
  clienteId: string;  // Modificato da 'cliente' a 'clienteId'
  servizioId: string; // Modificato da 'servizio' a 'servizioId'
};


// Middleware di autenticazione
router.use((req: Request, res: Response, next: NextFunction) => {
  authenticateAdmin(req, res, next);
});

// GET tutti gli appuntamenti
router.get("/", async (req: Request, res: Response) => {
  try {
    const appuntamenti = await prisma.appuntamento.findMany({
      include: { cliente: true, servizio: true },
    });
    res.json(appuntamenti);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero degli appuntamenti" });
  }
});

// GET singolo appuntamento
router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ error: "ID non valido" });
      return;
    }

    const appuntamento = await prisma.appuntamento.findUnique({
      where: { id },
      include: { cliente: true, servizio: true },
    });

    if (!appuntamento) {
      res.status(404).json({ error: "Appuntamento non trovato" });
      return;
    }

    res.json(appuntamento);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero dell'appuntamento" });
  }
});

// POST nuovo appuntamento
router.post("/", async (req: Request<{}, {}, CreateAppuntamentoRequest>, res: Response) => {
  try {
    // Validazione dei campi obbligatori
    if (!req.body.data || !req.body.ora || !req.body.durata || !req.body.clienteId || !req.body.servizioId) {
      res.status(400).json({ error: "Dati mancanti o non validi" });
      return;
    }

    const appuntamento = await prisma.appuntamento.create({
      data: {
        data: req.body.data,
        ora: req.body.ora,
        durata: req.body.durata,
        cliente: { connect: { id: req.body.clienteId } },
        servizio: { connect: { id: req.body.servizioId } },
        note: req.body.note || undefined,
        stato: req.body.stato || StatoAppuntamento.IN_CORSO
      },
      include: { cliente: true, servizio: true },
    });
    res.status(201).json(appuntamento);
  } catch (error) {
    res.status(500).json({ error: "Errore nella creazione dell'appuntamento" });
  }
});

// PUT aggiorna stato appuntamento
router.put("/:id/stato", async (req: Request<{ id: string }, {}, { stato: StatoAppuntamento }>, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ error: "ID non valido" });
      return;
    }

    if (!req.body.stato || !Object.values(StatoAppuntamento).includes(req.body.stato)) {
      res.status(400).json({ error: "Stato non valido" });
      return;
    }

    const appuntamento = await prisma.appuntamento.update({
      where: { id },
      data: { stato: req.body.stato },
      include: { cliente: true, servizio: true },
    });
    res.json(appuntamento);
  } catch (error) {
    res.status(500).json({
      error: "Errore nell'aggiornamento dello stato dell'appuntamento",
    });
  }
});

// DELETE appuntamento (cambio stato a CANCELLATO)
router.delete("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ error: "ID non valido" });
      return;
    }

    const appuntamento = await prisma.appuntamento.update({
      where: { id },
      data: { stato: StatoAppuntamento.CANCELLATO },
    });
    res.json(appuntamento);
  } catch (error) {
    res.status(500).json({ error: "Errore nella cancellazione dell'appuntamento" });
  }
});

export default router;