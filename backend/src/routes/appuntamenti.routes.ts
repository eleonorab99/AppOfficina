import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

interface ParamsWithId {
  id: string;
}
// GET single appointment
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const appuntamento = await prisma.appuntamento.findUnique({
      where: { id },
    });

    if (!appuntamento) {
      return res.status(404).json({ error: "Appuntamento non trovato" });
    }

    return res.json(appuntamento);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Errore nel recupero dell'appuntamento" });
  }
});

// GET tutti gli appuntamenti
router.get("/", async (req, res) => {
  try {
    const appuntamenti = await prisma.appuntamento.findMany({
      include: { cliente: true },
    });
    res.json(appuntamenti);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero degli appuntamenti" });
  }
});

// POST nuovo appuntamento
router.post("/", async (req, res) => {
  try {
    const appuntamento = await prisma.appuntamento.create({
      data: req.body,
      include: { cliente: true },
    });
    res.status(201).json(appuntamento);
  } catch (error) {
    res.status(500).json({ error: "Errore nella creazione dell'appuntamento" });
  }
});

// PUT aggiorna stato appuntamento
router.put("/:id/stato", async (req, res) => {
  try {
    const appuntamento = await prisma.appuntamento.update({
      where: { id: req.params.id },
      data: { stato: req.body.stato },
      include: { cliente: true },
    });
    res.json(appuntamento);
  } catch (error) {
    res.status(500).json({
      error: "Errore nell'aggiornamento dello stato dell'appuntamento",
    });
  }
});

// DELETE appuntamento (cambio stato a CANCELLATO)
router.delete("/:id", async (req, res) => {
  try {
    const appuntamento = await prisma.appuntamento.update({
      where: { id: req.params.id },
      data: { stato: "CANCELLATO" },
    });
    res.json(appuntamento);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Errore nella cancellazione dell'appuntamento" });
  }
});

export default router;
