const Model = require('./model');

const edit = async (req) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const task = await Model.findOneAndUpdate({ _id: id }, body);
    if (!task) {
      return req.sendResponse(404, 'Task not exist.');
    }
    return req.sendResponse(200, 'Task Updated.');
  } catch (err) {
    return req.sendResponse(500, err);
  }
};

module.exports = edit;
