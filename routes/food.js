var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Plato= require('../models/comida');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Plato.find({},function(err,datos){
    res.status(200).json(datos);
  });

});

/* nuevo plato*/
router.post('/', function(req, res, next) {
  console.log(req.body);
  var plati=  Plato({
    id: req.body.id,
    nombre:req.body.nombre,
    precio:req.body.precio,
    imagen:req.body.imagen
  });

  plati.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.send(data);
    }
  });

});

module.exports = router;
