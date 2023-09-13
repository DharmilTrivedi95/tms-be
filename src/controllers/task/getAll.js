const Model = require("./model");

const getAll = async (req) => {
  try {
    const tasks = await Model.find();
    return req.sendResponse(200, tasks || []);
  } catch (err) {
    return req.sendResponse(500, err);
  }
};

module.exports = getAll;
