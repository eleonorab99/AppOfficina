import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Qui dovresti verificare le credenziali con quelle salvate nel database
  // Per esempio:
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
      { email, role: 'ADMIN' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenziali non valide' });
  }
});

export default router;