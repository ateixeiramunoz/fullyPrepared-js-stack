var express = require('express');
var router = express.Router();
var MaterialController = require('../controllers/material');


//router.get("/list",  MaterialController.list);
//router.post("/create", MaterialController.create);
router.get("/get/:id", MaterialController.getMaterial);
//router.put("/put/:id", MaterialController.update);
//router.delete("/delete/:id", MaterialController.delete);

module.exports = router;
