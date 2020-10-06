var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer = require('multer');
var path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

/* GET home page. */
router.get('/uploads', function (req, res, next) {
  const directoryPath = path.join(__dirname, '../public');
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
      console.log('Unable to scan directory: ' + err);
    }

    let { link = null } = req.query;
    res.render('index', { link, files });
  });
});

router.post('/', upload.any(), function (req, res, next) {
  res.redirect('/uploads?link=' + req.files[0].originalname)
});

module.exports = router;
