export interface Appointment {
    id: string;
    title: string;
    start: string;
    end: string;
    backgroundColor: string;
    borderColor: string;
    extendedProps: {
      cliente: {
        nome: string;
        cognome: string;
        email: string;
        telefono: string;
      };
      servizio: {
        nome: string;
      };
      note?: string;
      stato: string;
    };
  }
  
  // Interfaccia per i dati ricevuti dall'API
  export interface AppointmentData {
    id: string;
    cliente: {
      nome: string;
      cognome: string;
      email: string;
      telefono: string;
    };
    servizio: {
      nome: string;
    };
    data: string;
    ora: string;
    durata: number;
    note?: string;
    stato: string;
  }