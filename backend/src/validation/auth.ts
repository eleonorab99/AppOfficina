import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRole } from '../types/user';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
  };
}

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ message: 'Token di autenticazione mancante' });
      return;
    }
  
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      (req as AuthRequest).user = user as { id: string; role: UserRole };
      next();
    } catch (error) {
      res.status(403).json({ message: 'Token non valido' });
      return;
    }
  };

  export const authorizeRoles = (...roles: UserRole[]) => {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      const authReq = req as AuthRequest;
      if (!authReq.user || !roles.includes(authReq.user.role)) {
        res.status(403).json({ message: 'Non hai i permessi necessari' });
        return;
      }
      next();
    };
  };