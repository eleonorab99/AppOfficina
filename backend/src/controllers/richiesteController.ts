import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PDFService } from "../templates/uploads/pdf";
import { transporter, emailConfig } from "../config/email";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();
const pdfService = new PDFService();

export const createRichiesta = async (req: Request, res: Response) => {
  try {
    console.log("Ricevuta richiesta:", req.body);

    const { nome, cognome, email, telefono, note, servizioId } = req.body;

    // Recupera il nome del servizio SOLO se servizioId è presente
    let servizioNome = "Altro";
    if (servizioId) {
      const servizio = await prisma.servizio.findUnique({
        where: { id: servizioId },
      });
      if (servizio?.nome) servizioNome = servizio.nome;
    }

    // Prepara i dati per il salvataggio
    const data: any = { nome, cognome, email, telefono, note };
    if (servizioId) data.servizioId = servizioId;

    // Salva la richiesta nel DB
    const richiesta = await prisma.richiesta.create({
      data,
    });

    // Assicurati che la cartella per i PDF esista
    const pdfDir = path.join(__dirname, "../templates/uploads/pdf");
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }

    // Genera PDF
    const pdfPath = await pdfService.generateRequestPDF({
      nome,
      cognome,
      email,
      telefono,
      servizio: servizioNome,
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
    console.error("Errore dettagliato:", error);
  }
};
