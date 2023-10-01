var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tarea: Programar una ruta que varie el contenido de su respuesta en base a un parámetro recibido' });
});

module.exports = router;
