import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

interface RequestData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  servizio: string;
  note: string;
}

export class PDFService {
  async generateRequestPDF(data: RequestData): Promise<string> {
    const doc = new PDFDocument();
    const fileName = `richiesta_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, "../../../tmp", fileName);

    // Assicurati che la cartella tmp esista
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(20).text("Richiesta Appuntamento", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Nome: ${data.nome}`);
    doc.text(`Cognome: ${data.cognome}`);
    doc.text(`Email: ${data.email}`);
    doc.text(`Telefono: ${data.telefono}`);
    doc.text(`Servizio richiesto: ${data.servizio}`);
    doc.moveDown();
    doc.text("Messaggio:");
    doc.text(data.note);

    doc.end();

    // Attendi che il file sia scritto
    await new Promise<void>((resolve) => stream.on("finish", () => resolve()));

    return filePath;
  }
}