const errorHandler = (err) => {
  return { error: err.message ? err.message : err };
};

const successHandler = (data) => {
  if (typeof data === 'string') {
    return { message: data };
  }
  return data;
};


const sendResponse = async (req, res, next, statusCode, data) => {
  if (statusCode >= 200 && statusCode <= 299) {
    return res.status(statusCode).json(successHandler(data));
  }
  return res.status(statusCode).json(errorHandler(data));
};

module.exports = {
  sendResponse,
};
