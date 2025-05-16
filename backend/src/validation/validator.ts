import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationError } from 'joi';

export const validateRequest = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          message: 'Dati non validi',
          errors: error.details.map((detail) => detail.message)
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Errore durante la validazione'
        });
      }
    }
  };
};