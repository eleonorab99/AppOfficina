import { transporter, EmailOptions } from '../config/email';
import { appuntamentoTemplate } from '../templates/email/appuntamento';
import { richiestaTemplate } from '../templates/email/richiesta';

interface TemplateData {
  'appuntamento.conferma': {
    nome: string;
    data: string;
    ora: string;
    servizio: string;
  };
  'appuntamento.promemoria': {
    nome: string;
    data: string;
    ora: string;
    servizio: string;
  };
  'appuntamento.cancellazione': {
    nome: string;
    data: string;
    ora: string;
    servizio: string;
  };
  'richiesta.nuova': {
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
    servizio: string;
    note?: string;
  };
  'richiesta.conferma': {
    nome: string;
    cognome: string;
    servizio: string;
  };
}

type TemplateType = keyof TemplateData;

export class EmailService {
  async sendEmail<T extends TemplateType>(
    options: Omit<EmailOptions, 'template' | 'context'> & {
      template: T;
      context: TemplateData[T];
    }
  ): Promise<void> {
    try {
      const html = this.getTemplate(options.template, options.context);
      await transporter.sendMail({
        ...options,
        html
      });
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      throw new Error('Impossibile inviare l\'email');
    }
  }

  private getTemplate<T extends TemplateType>(
    template: T,
    context: TemplateData[T]
  ): string {
    switch (template) {
        case 'appuntamento.conferma':
            return appuntamentoTemplate.conferma(context as TemplateData['appuntamento.conferma']);
          case 'appuntamento.promemoria':
            return appuntamentoTemplate.promemoria(context as TemplateData['appuntamento.promemoria']);
          case 'appuntamento.cancellazione':
            return appuntamentoTemplate.cancellazione(context as TemplateData['appuntamento.cancellazione']);
          case 'richiesta.nuova':
            return richiestaTemplate.nuova(context as TemplateData['richiesta.nuova']);
          case 'richiesta.conferma':
            return richiestaTemplate.conferma(context as TemplateData['richiesta.conferma']);
          default:
            throw new Error('Template non trovato');
    }
  }
}