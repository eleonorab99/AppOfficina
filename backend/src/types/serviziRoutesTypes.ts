export interface RequestParams {
    id: string;
  }
  
export interface Servizio {
    nome: string;
    descrizione: string;
    prezzo: number;
    durata: number;
    categoria: "MECCANICA" | "CARROZZERIA" | "GOMME" | "ARIA_CONDIZIONATA" | "LAVAGGIO" | "SANIFICAZIONE" | "REVISIONE";
    attivo: boolean;
  }