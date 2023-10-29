var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades',{
    layout: 'admin/layout',
    persona: req.session.nombre,
    id: req.session.id_usuario
  });
});

module.exports = router;