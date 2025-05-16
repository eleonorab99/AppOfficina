import express, { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import { RequestParams, Richiesta } from "../types/richiesteRoutesTypes";
import { authenticateToken, authorizeRoles } from '../validation/auth';
import { validateRequest } from '../validation/validator';
import { richiestaSchema } from '../validation/schema';
import { UserRole } from '../types/user';

const router: Router = express.Router();
const prisma = new PrismaClient();

// GET tutte le richieste
router.get('/', 
  authenticateToken, 
  authorizeRoles(UserRole.ADMIN, UserRole.STAFF),
  async (req: Request, res: Response): Promise<void> => {
  try {
    const richieste = await prisma.richiesta.findMany({
      include: { servizio: true },
    });
    res.json(richieste);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero delle richieste" });
  }
});

// GET richiesta specifica
router.get("/:id", async (req: Request<RequestParams>, res: Response): Promise<void> => {
  try {
    const richiesta = await prisma.richiesta.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!richiesta) {
      res.status(404).json({ error: "Richiesta non trovata" });
      return;
    }
    res.json(richiesta);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero della richiesta" });
  }
});

// POST nuova richiesta
router.post("/", async (req: Request<{}, {}, Richiesta>, res: Response): Promise<void> => {
  try {
    const richiesta = await prisma.richiesta.create({
      data: req.body,
      include: { servizio: true },
    });
    res.status(201).json(richiesta);
  } catch (error) {
    res.status(500).json({ error: "Errore nella creazione della richiesta" });
  }
});

// PUT aggiorna stato richiesta
router.put("/:id/stato", async (req: Request<RequestParams, {}, { stato: string }>, res: Response): Promise<void> => {
  try {
    const richiesta = await prisma.richiesta.update({
      where: { id: req.params.id },
      data: { stato: req.body.stato },
      include: { servizio: true },
    });
    res.json(richiesta);
  } catch (error) {
    res.status(500).json({ error: "Errore nell'aggiornamento dello stato della richiesta" });
  }
});

// PUT aggiorna PDF generato
router.put("/:id/pdf", async (req: Request<RequestParams, {}, { urlPdf: string }>, res: Response): Promise<void> => {
  try {
    const richiesta = await prisma.richiesta.update({
      where: { id: req.params.id },
      data: {
        pdfGenerato: true,
        urlPdf: req.body.urlPdf,
      },
    });
    res.json(richiesta);
  } catch (error) {
    res.status(500).json({ error: "Errore nell'aggiornamento del PDF della richiesta" });
  }
});

export default router;
