import fs from 'fs/promises';
import path from 'path';

export class StorageService {
  private readonly pdfDir = path.join(__dirname, '../uploads/pdf');
  private readonly tempDir = path.join(__dirname, '../uploads/temp');

  async savePdf(file: Express.Multer.File): Promise<string> {
    const fileName = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(this.pdfDir, fileName);
    
    await fs.copyFile(file.path, filePath);
    await fs.unlink(file.path); // Rimuove il file temporaneo
    
    return fileName;
  }

  async deletePdf(fileName: string): Promise<void> {
    const filePath = path.join(this.pdfDir, fileName);
    await fs.unlink(filePath);
  }
}