export const appuntamentoTemplate = {
    conferma: (data: {
      nome: string;
      data: string;
      ora: string;
      servizio: string;
    }) => `
      Gentile ${data.nome},
  
      Confermiamo il suo appuntamento per il servizio di ${data.servizio}
      Data: ${data.data}
      Ora: ${data.ora}
  
      La aspettiamo presso la nostra officina.
  
      Cordiali saluti,
      Autofficina Gaglione
    `,
  
    promemoria: (data: {
      nome: string;
      data: string;
      ora: string;
    }) => `
      Gentile ${data.nome},
  
      Le ricordiamo il suo appuntamento di domani:
      Data: ${data.data}
      Ora: ${data.ora}
  
      La aspettiamo presso la nostra officina.
  
      Cordiali saluti,
      Autofficina Gaglione
    `,
    cancellazione: (data: {
      nome: string;
      data: string;
      ora: string;
    }) => `
      Gentile ${data.nome},
  
      Confermiamo la cancellazione del suo appuntamento previsto per:
      Data: ${data.data}
      Ora: ${data.ora}
  
      Per prenotare un nuovo appuntamento, non esiti a contattarci.
  
      Cordiali saluti,
      Autofficina Gaglione
    `
  };