export const richiestaTemplate = {
    nuova: (data: {
      nome: string;
      cognome: string;
      email: string;
      telefono: string;
      servizio: string;
      note?: string;
    }) => `
      Nuova richiesta di Appuntamento
      
      Dettagli cliente:
      Nome: ${data.nome} ${data.cognome}
      Email: ${data.email}
      Telefono: ${data.telefono}
      
      Servizio richiesto: ${data.servizio}
      ${data.note ? `Note aggiuntive: ${data.note}` : ''}
      
      Cordiali saluti,
      Autofficina Gaglione
    `,
  
    conferma: (data: {
      nome: string;
      cognome: string;
      servizio: string;
    }) => `
      Gentile ${data.nome} ${data.cognome},
      
    La sua richiesta per il servizio "${data.servizio}" è stata ricevuta.
    La contatteremo al più presto per confermare l'appuntamento.
      
      Cordiali saluti,
      Autofficina Gaglione
    `
  };