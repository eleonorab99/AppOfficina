import { Request, Response, NextFunction } from 'express';
import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } from '../config/constants';

export const fileValidator = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nessun file caricato' });
  }

  const { size, mimetype } = req.file;

  if (size > MAX_FILE_SIZE) {
    return res.status(400).json({ error: 'File troppo grande. Dimensione massima: 5MB' });
  }

  if (!ALLOWED_FILE_TYPES.includes(mimetype)) {
    return res.status(400).json({ error: 'Tipo di file non supportato' });
  }

  next();
};