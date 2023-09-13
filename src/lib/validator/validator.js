module.exports = function joiValidate(schema) {
  function validate(req, res, next) {
    const { body } = req;
    const { error } = schema.validate(body);
    if (error) {
      if (error.details && error.details.length) {
        res.status(422).send({ error: error.details[0].message });
      } else {
        res.status(422).send({ error: error.message });
      }
    } else {
      next();
    }
  }

  return validate;
};
