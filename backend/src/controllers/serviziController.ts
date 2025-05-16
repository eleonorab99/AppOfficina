import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllServizi = async (req: Request, res: Response): Promise<void> => {
  try {
    const servizi = await prisma.servizio.findMany({
      where: { attivo: true }
    });
    res.json(servizi);
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recupero dei servizi' });
  }
};

const getServizioById = async (req: Request, res: Response): Promise<void> => {
  try {
    const servizio = await prisma.servizio.findUnique({
      where: { id: req.params.id }
    });
    if (!servizio) {
      res.status(404).json({ message: 'Servizio non trovato' });
    }
    res.json(servizio);
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recupero del servizio' });
  }
};

export {
  getAllServizi,
  getServizioById
};