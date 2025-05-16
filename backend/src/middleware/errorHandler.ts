import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

interface ErrorWithStatus extends Error {
  status?: number;
  code?: string;
}

export const errorHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log dettagliato dell'errore
  logger.error('Errore applicazione', {
    error: {
      message: err.message,
      stack: err.stack,
      code: err.code,
      status: err.status
    },
    request: {
      method: req.method,
      url: req.url,
      body: req.body,
      params: req.params,
      query: req.query,
      headers: {
        ...req.headers,
        authorization: undefined // Rimuove dati sensibili
      }
    }
  });

  const status = err.status || 500;
  const message = err.message || 'Si è verificato un errore interno del server';

  res.status(status).json({
    success: false,
    message,
    code: err.code,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};