const {sequilize, Sequilize} = require('../config/banco');
const empregadosModel =require("../models/empregados")(sequilize,Sequilize)

exports.teste =(req,res) =>{
 res.render("teste",{layout:false})
}