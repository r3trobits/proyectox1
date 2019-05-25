var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlatoSchema =  Schema({
  id: Number,
  nombre:String,
  precio: Number,
  imagen: String
});

module.exports = mongoose.model('Plato', PlatoSchema);
