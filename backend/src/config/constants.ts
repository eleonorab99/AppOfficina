export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

export const EMAIL_TEMPLATES = {
  RICHIESTA_NUOVA: 'richiesta.nuova',
  RICHIESTA_CONFERMA: 'richiesta.conferma',
  APPUNTAMENTO_CONFERMA: 'appuntamento.conferma',
  APPUNTAMENTO_PROMEMORIA: 'appuntamento.promemoria',
  APPUNTAMENTO_CANCELLAZIONE: 'appuntamento.cancellazione'
} as const;

export const STATI_RICHIESTA = {
  PENDING: 'PENDING',
  APPROVATA: 'APPROVATA',
  RIFIUTATA: 'RIFIUTATA'
} as const;

export const STATI_APPUNTAMENTO = {
  CONFERMATO: 'CONFERMATO',
  IN_CORSO: 'IN_CORSO',
  COMPLETATO: 'COMPLETATO',
  CANCELLATO: 'CANCELLATO'
} as const;