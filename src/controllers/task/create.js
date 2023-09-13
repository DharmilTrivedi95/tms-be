const Model = require('./model');

const create = async (req) => {
  try {
    const { body } = req;
    const task = new Model(body);
    await task.save();
    return req.sendResponse(200, 'Task Created.');
  } catch (err) {
    return req.sendResponse(500, err);
  }
};

module.exports = create;
