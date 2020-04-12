var express = require('express');
var router = express.Router();



/* GET home page. */
router.post('/GetXMLFromJSON', function(req, res) {
	res.statusText = 'Converted OK';
	console.log(req.body);
	
	var result = "OK";
	console.log(result);
	return res.status(200).json(result);
}
);


router.post('/DoComplexModif', function(req, res) {
	
	var modifPlan = req.body;
	for(i=0; i<transformations.length; i++)
	{
		switch (modifPlan.transformations[i])
		{
			
			case "toJson":{
				convertJsonToXML("xxx");
			}
			default :
				{
				
			
			}
			
		}
		
	}

	console.log("RESULT");
	console.log(result);
	return res.status(200).json(result);
});


/* GET home page. */
router.post('/GetJSONFromXML', function(req, res) {
	res.statusText = 'Converted OK';
	var result = convertJsonToXML(req.body)
	return res.status(200).json(result);
});


/* GET home page. */
router.get('/GetJSONFromXML', function(req, res) {
	res.statusText = 'Converted OK';
	return res.status(200).json("OK");
}

);


function convertJsonToXML (req) {
	XMLJSONconverter.js2xml(req , {compact: true, ignoreComment: true, spaces: 4})
	return;
}



module.exports = router;
