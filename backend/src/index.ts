import express, { Express, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { securityMiddleware } from './middleware/security';
import { errorHandler } from './middleware/errorHandler';
import serviziRouter from './routes/servizi.routes';
import richiesteRouter from './routes/richieste.routes';
import appuntamentiRouter from './routes/appuntamenti.routes';
import clientiRouter from './routes/clienti.routes';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

const app: Express = express();
const prisma = new PrismaClient();


// Applica i middleware di sicurezza
app.use(cors({
  origin: process.env.CORS_ORIGIN, // Cambia con il tuo frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Se hai bisogno di inviare i cookie
}));
app.use(securityMiddleware);
app.use(express.json());

// Routes
app.use('/api/servizi', serviziRouter);
app.use('/api/auth', authRoutes); // Assicurati di importare authRouter
app.use('/api/richieste', richiesteRouter);
app.use('/api/appuntamenti', appuntamentiRouter);
app.use('/api/clienti', clientiRouter);

// Gestione degli errori centralizzata
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});

export default app;
