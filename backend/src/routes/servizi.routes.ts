import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { RequestParams, Servizio } from '../types/serviziRoutesTypes';
import { authenticateToken, authorizeRoles } from '../validation/auth';
import { validateRequest } from '../validation/validator';
import { UserRole } from '../types/user';

const router: Router = express.Router();
const prisma = new PrismaClient();

// GET tutti i servizi attivi
router.get('/', 
  authenticateToken, 
  authorizeRoles(UserRole.ADMIN, UserRole.STAFF),
  async (req: Request, res: Response): Promise<void> => {
  try {
    const servizi = await prisma.servizio.findMany({
      where: { attivo: true }
    });
    res.json(servizi);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recupero dei servizi' });
  }
});

// GET servizio specifico
router.get('/:id', async (req: Request<RequestParams>, res: Response): Promise<void> => {
  try {
    const servizio = await prisma.servizio.findUnique({
      where: { id: req.params.id }
    });
    if (!servizio) {
      res.status(404).json({ error: 'Servizio non trovato' });
      return;
    }
    res.json(servizio);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recupero del servizio' });
  }
});

// POST nuovo servizio
router.post('/', async (req: Request<{}, {}, Servizio>, res: Response): Promise<void> => {
  try {
    const servizio = await prisma.servizio.create({
      data: req.body
    });
    res.status(201).json(servizio);
  } catch (error) {
    res.status(500).json({ error: 'Errore nella creazione del servizio' });
  }
});

// PUT aggiorna servizio
router.put('/:id', async (req: Request<RequestParams, {}, Partial<Servizio>>, res: Response): Promise<void> => {
  try {
    const servizio = await prisma.servizio.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(servizio);
  } catch (error) {
    res.status(500).json({ error: 'Errore nell\'aggiornamento del servizio' });
  }
});

// DELETE servizio (soft delete)
router.delete('/:id', async (req: Request<RequestParams>, res: Response): Promise<void> => {
  try {
    const servizio = await prisma.servizio.update({
      where: { id: req.params.id },
      data: { attivo: false }
    });
    res.json(servizio);
  } catch (error) {
    res.status(500).json({ error: 'Errore nella disattivazione del servizio' });
  }
});

export default router;