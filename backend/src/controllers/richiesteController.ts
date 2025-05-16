import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Interfaccia per la richiesta
interface RichiestaInput {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  note?: string;
  servizioId: string;
}

// Configurazione del trasportatore email
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password'
  }
});

const createRichiesta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, cognome, email, telefono, note, servizioId }: RichiestaInput = req.body;

    const richiesta = await prisma.richiesta.create({
      data: {
        nome,
        cognome,
        email,
        telefono,
        note,
        servizioId
      }
    });

    // Genera PDF
    const pdfPath = await generatePDF(richiesta);
    
    // Invia email
    await sendEmail(richiesta, pdfPath);

    // Aggiorna il record con l'URL del PDF
    await prisma.richiesta.update({
      where: { id: richiesta.id },
      data: {
        pdfGenerato: true,
        urlPdf: pdfPath
      }
    });

    res.status(201).json(richiesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nella creazione della richiesta' });
  }
};

const generatePDF = async (richiesta: any): Promise<string> => {
  const doc = new PDFDocument();
  const pdfPath = path.join(__dirname, `../uploads/richiesta_${richiesta.id}.pdf`);
  
  doc.pipe(fs.createWriteStream(pdfPath));
  
  doc.fontSize(25).text('Richiesta di Appuntamento', 100, 100);
  doc.fontSize(12).text(`Nome: ${richiesta.nome}`, 100, 150);
  doc.text(`Cognome: ${richiesta.cognome}`, 100, 170);
  doc.text(`Email: ${richiesta.email}`, 100, 190);
  doc.text(`Telefono: ${richiesta.telefono}`, 100, 210);
  doc.text(`Note: ${richiesta.note || 'Nessuna nota'}`, 100, 230);
  
  doc.end();
  
  return pdfPath;
};

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  attachments: Array<{
    filename: string;
    path: string;
  }>;
}

const sendEmail = async (richiesta: any, pdfPath: string): Promise<void> => {
  const mailOptions: EmailOptions = {
    from: 'your-email@example.com',
    to: 'officina@example.com', // Email del proprietario
    subject: 'Nuova Richiesta di Appuntamento',
    text: `Nuova richiesta da ${richiesta.nome} ${richiesta.cognome}`,
    attachments: [{
      filename: `richiesta_${richiesta.id}.pdf`,
      path: pdfPath
    }]
  };

  await transporter.sendMail(mailOptions);
};

export {
  createRichiesta
};