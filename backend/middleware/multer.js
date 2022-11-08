const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname).toString();
    if (ext !== '.pdf' && ext !== '.DOC' && ext !== '.DOCX' && ext !== '.PPT' && ext !== '.PPTX' && ext !== '.ODP' && ext !== '.ODT' && ext !== '.pages') {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
