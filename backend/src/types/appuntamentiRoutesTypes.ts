export interface ParamsWithId {
    id: string;
  }
  
export interface Appuntamento {
    data: Date;
    ora: Date;
    durata: number;
    clienteId: string;
    note?: string;
    stato?: string;
  }