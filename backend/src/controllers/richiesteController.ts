import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PDFService } from "../templates/email/pdf";
import { transporter, emailConfig } from "../config/email";

const prisma = new PrismaClient();
const pdfService = new PDFService();

export const createRichiesta = async (req: Request, res: Response) => {
  try {
    const { nome, cognome, email, telefono, note, servizioId } = req.body;

    // Recupera il nome del servizio
    const servizio = await prisma.servizio.findUnique({
      where: { id: servizioId },
    });

    // Salva la richiesta nel DB
    const richiesta = await prisma.richiesta.create({
      data: { nome, cognome, email, telefono, note, servizioId },
    });

    // Genera PDF
    const pdfPath = await pdfService.generateRequestPDF({
      nome,
      cognome,
      email,
      telefono,
      servizio: servizio?.nome || "Altro",
      note,
    });

    // Invia email con PDF allegato
    await transporter.sendMail({
      from: emailConfig.from,
      to: "eleonoratornesi@gmail.com", // Cambia con la tua email
      subject: "Nuova richiesta appuntamento",
      text: `Nuova richiesta da ${nome} ${cognome}`,
      attachments: [
        {
          filename: `richiesta_${richiesta.id}.pdf`,
          path: pdfPath,
        },
      ],
    });

    // Aggiorna richiesta con urlPdf se vuoi
    await prisma.richiesta.update({
      where: { id: richiesta.id },
      data: { pdfGenerato: true, urlPdf: pdfPath },
    });

    res.status(201).json({ message: "Richiesta inviata con successo" });
  } catch (error) {
    res.status(500).json({ error: "Errore nella creazione della richiesta" });
  }
};
