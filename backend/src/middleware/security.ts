import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 100 // limite di richieste per IP
});

export const securityMiddleware = [
  helmet(), // Protegge l'app da vulnerabilità web note
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }),
  limiter, // Protegge da attacchi brute force
  compression() // Comprime le risposte
];