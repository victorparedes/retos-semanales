const Joi = require('joi')

const events = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
})

const gift = Joi.object({
  event_id: Joi.string().required(),
  product_link: Joi.string().required(),
  description: Joi.string().required(),
  order: Joi.number().required(),
})

const queryById = Joi.object({
  id: Joi.string().required(),
})

const paramyById = Joi.object({
  uid: Joi.string().required(),
})

const guest = Joi.object({
  event_id: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email_adress: Joi.string().required(),
})

module.exports = {
  events,
  gift,
  queryById,
  paramyById,
  guest,
}