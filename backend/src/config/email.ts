import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

export const emailConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  from: process.env.EMAIL_FROM || 'noreply@autofficina.com'
};

export const transporter = nodemailer.createTransport(emailConfig);

export interface EmailOptions extends Partial<Options> {
  to: string;
  subject: string;
  template: string;
  context: Record<string, any>;
}