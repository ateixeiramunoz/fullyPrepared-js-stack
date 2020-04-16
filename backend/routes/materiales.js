var express = require('express');
var router = express.Router();
var MaterialController = require('../controllers/material');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/list",  MaterialController.list);
router.post("/create", MaterialController.create);
router.get("/get/:id", MaterialController.get);
router.put("/put/:id", MaterialController.update);
router.delete("/delete/:id", MaterialController.delete);

module.exports = router;
