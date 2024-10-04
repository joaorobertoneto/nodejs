const express=require('express');
const router =express.Router();
var controlo = require("../controllers/controlo")

router.get('/',controlo.teste); 
module.exports = router;