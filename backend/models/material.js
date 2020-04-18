'use strict' 
var mongoose =  require('mongoose'); 

var Schema = mongoose.Schema; 

// Creamos el objeto del esquema y sus atributos

var MaterialSchema = Schema({
	_id : Object,
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String, 
    image: String
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Material', MaterialSchema);