const Model = require('./model');

const _delete = async (req) => {
  try {
    const { id } = req.params;
    const task = await Model.findByIdAndDelete({ _id: id });
    if (!task) {
      return req.sendResponse(404, 'Task not exists.');
    }
    return req.sendResponse(200, 'Task deleted.');
  } catch (err) {
    return req.sendResponse(500, err);
  }
};

module.exports = _delete;
