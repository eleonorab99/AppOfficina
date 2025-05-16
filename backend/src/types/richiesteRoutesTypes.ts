export interface RequestParams {
    id: string;
  }
  
export interface Richiesta {
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
    note?: string;
    servizioId: string;
    stato?: string;
    pdfGenerato?: boolean;
    urlPdf?: string;
  }