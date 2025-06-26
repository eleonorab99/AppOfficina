import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token mancante' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as JwtPayload & { role?: string };
    if (decoded.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Accesso non autorizzato' });
    }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token non valido' });
  }
};