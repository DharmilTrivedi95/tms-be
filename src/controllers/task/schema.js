const Joi = require('joi');

// To validate the request payload, multiple validations can be set here.

const schema = Joi.object({
  title: Joi.string().label('Task Name').required(),
  description: Joi.string().label('Task Description').optional(),
  type: Joi.string().label('Task Type').optional(),
  priority: Joi.string().label('Task Priority').optional(),
  status: Joi.string().label('Task Status').required(),
});

module.exports = {
  schema,
};
