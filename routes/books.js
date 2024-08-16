var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Books have been retrieved")
});

router.post('/', function (req, res, next) {
  res.send("POST METHOD")
})

router.put('/:id', function (req, res, next) {
  paramData = req.params.id
  res.send("PUT METHOD")
})

router.delete('/:id', function (req, res, next) {
  res.send("DELETE METHOD")
})


module.exports = router;