var express = require('express');
const path = require('path');
var router = express.Router();

// Corrected path to the index.html file based on your description
var indexPath = path.join(__dirname, '..', 'public', 'images', 'index.html');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(indexPath);
});

module.exports = router;
