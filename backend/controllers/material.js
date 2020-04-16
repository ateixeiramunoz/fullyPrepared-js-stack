'use strict'// Cargamos los modelos para usarlos posteriormente

var material = require('../models/material');

// Conseguir datos de un usuariofunction getmaterial(req, res){
    
var materialId = req.params.id;//buscar un documento por un  id
    
    
'use strict'// Cargamos los modelos para usarlos posteriormente
var User = require('../models/user');

// Conseguir datos de un usuario

function getUser(req, res){
    var userId = req.params.id;
    //buscar un documento por un id
    User.findById(userId, (err, user) => {
        if(err)return res.status(500).send({message: 'Error en la petición'});
        if(!user) return res.status(404).send({message: 'EL usuario no existe'});
        
    });
}