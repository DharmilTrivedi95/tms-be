const Model = require('./model');

const get = async (req) => {
  try {
    const params = req.params;
    const task = await Model.findOne({_id: params.id});
    return req.sendResponse(200, task || []);
  } catch (err) {
    return req.sendResponse(500, err);
  }
};

module.exports = get;
