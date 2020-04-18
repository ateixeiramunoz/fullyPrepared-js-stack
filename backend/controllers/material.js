'use strict'// Cargamos los modelos para usarlos posteriormente
var Material = require('../models/material');
   
// Conseguir datos de un material

exports.getMaterial = async (req, res) => {

	console.log(req.params.id)
	Material.findById(req.params.id, function(err, obj){
		console.log("FOUND");

	    	if(err)
    		{
	    		return	res.send(err);
    		}
	    	return	res.send(obj);
		    
	    });
	  
    
};


exports.list = (req, res) => {
	  try {
	    const objs = Material.find();
	    
	   return res.status(200).send(objs);
	    
	  } catch (err) {
		  return  res.status(404).send(err);
	  }
};

