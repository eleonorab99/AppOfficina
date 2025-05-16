import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export class PDFService {
  private readonly pdfDir = path.join(__dirname, '../uploads/pdf');

  async generateRequestPDF(data: {
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
    servizio: string;
    note?: string;
    dataPreferita?: Date;
    oraPreferita?: Date;
  }): Promise<string> {
    const doc = new PDFDocument();
    const fileName = `richiesta-${Date.now()}.pdf`;
    const filePath = path.join(this.pdfDir, fileName);
    
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Intestazione
    doc.fontSize(20)
    .text('Autofficina Gaglione', { align: 'center' })
    .moveDown();

 // Dettagli richiesta
 doc.fontSize(16)
    .text('Richiesta di Appuntamento', { align: 'center' })
    .moveDown();

 // Informazioni cliente
 doc.fontSize(12)
    .text('Dati Cliente:')
    .text(`Nome: ${data.nome} ${data.cognome}`)
    .text(`Email: ${data.email}`)
    .text(`Telefono: ${data.telefono}`)
    .moveDown();

 // Dettagli servizio
 doc.text('Dettagli Servizio:')
    .text(`Servizio richiesto: ${data.servizio}`)
    .text(`Data preferita: ${data.dataPreferita ? data.dataPreferita.toLocaleDateString('it-IT') : 'Non specificata'}`)
    .text(`Ora preferita: ${data.oraPreferita ? data.oraPreferita.toLocaleTimeString('it-IT') : 'Non specificata'}`)
    .moveDown();

 if (data.note) {
   doc.text('Note aggiuntive:')
      .text(data.note)
      .moveDown();
 }

 // Footer
 doc.fontSize(10)
    .text('Documento generato automaticamente', { align: 'center' });

 doc.end();

 return new Promise((resolve, reject) => {
   stream.on('finish', () => resolve(fileName));
   stream.on('error', reject);
 });
}
}