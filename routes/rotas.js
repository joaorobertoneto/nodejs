const express=require('express');
const router =express.Router();
var controlo = require("../controllers/controlo")
module.exports = router;
router.get('/',controlo.empregado);
router.post('/',controlo.inserir);