import express, { Request, Response, Router, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { RequestParams, Cliente } from "../types/clientiRoutesTypes";
import { clienteSchema } from '../validation/schema';
import { UserRole } from '../types/user';
import { authenticateToken, authorizeRoles, AuthRequest } from '../validation/auth';
import { validateRequest } from '../validation/validator';

const router: Router = express.Router();
const prisma = new PrismaClient();

// GET tutti i clienti
router.get('/', 
    authenticateToken, 
    authorizeRoles(UserRole.ADMIN, UserRole.STAFF),
    async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const clienti = await prisma.cliente.findMany({
      include: { appuntamenti: true },
    });
    res.json(clienti);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero dei clienti" });
  }
});

// GET cliente specifico
router.get('/:id', 
    authenticateToken,
    authorizeRoles(UserRole.ADMIN, UserRole.STAFF),
    async (req: AuthRequest & Request<RequestParams>, res: Response): Promise<void> => {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { id: req.params.id },
      include: { appuntamenti: true }
    });
    if (!cliente) {
      res.status(404).json({ error: "Cliente non trovato" });
      return;
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero del cliente" });
  }
});

// POST nuovo cliente
router.post('/',
    authenticateToken,
    authorizeRoles(UserRole.ADMIN, UserRole.STAFF),
    validateRequest(clienteSchema),
    async (req: AuthRequest & Request<{}, {}, Cliente>, res: Response): Promise<void> => {
  try {
    const cliente = await prisma.cliente.create({
      data: req.body,
    });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Errore nella creazione del cliente" });
  }
})

// PUT aggiorna cliente
router.put('/:id',
    authenticateToken,
    authorizeRoles(UserRole.ADMIN, UserRole.STAFF),
    validateRequest(clienteSchema),
    async (req: AuthRequest & Request<RequestParams, {}, Partial<Cliente>>, res: Response): Promise<void> => {
  try {
    const cliente = await prisma.cliente.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Errore nell'aggiornamento del cliente" });
  }
});

export default router;
