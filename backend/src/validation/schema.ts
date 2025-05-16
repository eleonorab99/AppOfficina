import Joi from 'joi';

export const clienteSchema = Joi.object({
  nome: Joi.string().required().min(2).max(50),
  cognome: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  telefono: Joi.string().required().pattern(/^[0-9+\s-]{8,20}$/),
});

export const appuntamentoSchema = Joi.object({
  data: Joi.date().required(),
  ora: Joi.date().required(),
  durata: Joi.number().required().min(15).max(240),
  clienteId: Joi.string().required(),
  note: Joi.string().allow('').max(500),
});

export const richiestaSchema = Joi.object({
  nome: Joi.string().required().min(2).max(50),
  cognome: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  telefono: Joi.string().required(),
  note: Joi.string().allow('').max(500),
  servizioId: Joi.string().required(),
});