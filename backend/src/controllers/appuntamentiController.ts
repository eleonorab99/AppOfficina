import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { EmailService } from '../services/email';

const prisma = new PrismaClient();
const emailService = new EmailService();

// Interfaccia per l'input dell'appuntamento
interface AppuntamentoInput {
  data: Date;
  ora: Date;
  durata: number;
  clienteId: string;
  servizioId: string;
  note?: string;
}

export const appuntamentiController = {
  // GET tutti gli appuntamenti
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const appuntamenti = await prisma.appuntamento.findMany({
        include: {
          cliente: true,
          servizio: true
        }
      });
      res.json(appuntamenti);
    } catch (error) {
      console.error('Errore nel recupero degli appuntamenti:', error);
      res.status(500).json({ error: 'Errore nel recupero degli appuntamenti' });
    }
  },

  // GET appuntamento specifico
  getById: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const appuntamento = await prisma.appuntamento.findUnique({
        where: { id },
        include: {
          cliente: true,
          servizio: true
        }
      });

      if (!appuntamento) {
        res.status(404).json({ error: 'Appuntamento non trovato' });
        return;
      }

      res.json(appuntamento);
    } catch (error) {
      console.error('Errore nel recupero dell\'appuntamento:', error);
      res.status(500).json({ error: 'Errore nel recupero dell\'appuntamento' });
    }
  },

  // POST nuovo appuntamento
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const appuntamentoData: AppuntamentoInput = req.body;
      
      const appuntamento = await prisma.appuntamento.create({
        data: appuntamentoData,
        include: {
          cliente: true,
          servizio: true
        }
      });

      // Invia email di conferma
      await emailService.sendEmail({
        to: appuntamento.cliente.email,
        subject: 'Conferma Appuntamento',
        template: 'appuntamento.conferma',
        context: {
          nome: appuntamento.cliente.nome,
          data: appuntamento.data.toISOString().split('T')[0],
          ora: new Date(appuntamento.ora).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
          servizio: appuntamento.servizio.nome
        }
      });

      res.status(201).json(appuntamento);
    } catch (error) {
      console.error('Errore nella creazione dell\'appuntamento:', error);
      res.status(500).json({ error: 'Errore nella creazione dell\'appuntamento' });
    }
  },

  // PUT aggiorna stato appuntamento
  updateStato: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { stato } = req.body;

      const appuntamento = await prisma.appuntamento.update({
        where: { id },
        data: { stato },
        include: {
          cliente: true,
          servizio: true
        }
      });

      // Se lo stato è "CONFERMATO", invia un promemoria
      if (stato === 'CONFERMATO') {
        await emailService.sendEmail({
          to: appuntamento.cliente.email,
          subject: 'Promemoria Appuntamento',
          template: 'appuntamento.promemoria',
          context: {
            nome: appuntamento.cliente.nome,
            data: appuntamento.data.toISOString().split('T')[0],
            ora: new Date(appuntamento.ora).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
            servizio: ''
          }
        });
      }

      res.json(appuntamento);
    } catch (error) {
      console.error('Errore nell\'aggiornamento dell\'appuntamento:', error);
      res.status(500).json({ error: 'Errore nell\'aggiornamento dell\'appuntamento' });
    }
  },

  // DELETE appuntamento (soft delete - cambio stato a CANCELLATO)
  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const appuntamento = await prisma.appuntamento.update({
        where: { id },
        data: { stato: 'CANCELLATO' },
        include: {
          cliente: true,
          servizio: true
        }
      });

      // Invia email di cancellazione
      await emailService.sendEmail({
        to: appuntamento.cliente.email,
        subject: 'Cancellazione Appuntamento',
        template: 'appuntamento.cancellazione',
        context: {
          nome: appuntamento.cliente.nome,
          data: appuntamento.data.toISOString().split('T')[0],
          ora: new Date(appuntamento.ora).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
          servizio: appuntamento.servizio.nome
        }
      });

      res.json(appuntamento);
    } catch (error) {
      console.error('Errore nella cancellazione dell\'appuntamento:', error);
      res.status(500).json({ error: 'Errore nella cancellazione dell\'appuntamento' });
    }
  }
};

export default appuntamentiController;