const DocumnetNotFoundError = require("../../../Error/DocumentNotFoundError");

module.exports = (error, req, res, next) => {
  if (error instanceof DocumnetNotFoundError) {
    res.status(404).json({ error: error.message });
  }
  next(error);
};
