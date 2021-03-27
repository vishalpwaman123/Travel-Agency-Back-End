//Use for image uploading

const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.match(/jpe|jpeg|png$i/)) {
      callback(new Error("file not allow"), false);
      return;
    }
    callback(null, true);
  },
});
