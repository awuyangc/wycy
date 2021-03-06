var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'Express' });
});

router.get('/:urlname', function(req, res, next) {
  res.render('admin/'+req.params.urlname);
});


module.exports = router;
