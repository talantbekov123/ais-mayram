var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})

/* GET home page. */
router.get('/uploads', function(req, res, next) {
  let { link = null }  = req.query;
  res.render('index', { link });
});

router.post('/', upload.any(), function(req, res, next) {
  res.redirect('/uploads?link=' + req.files[0].originalname)
});

module.exports = router;
