const {sequilize, Sequilize} = require('../config/banco');
const empregadosModel =require("../models/empregados")(sequilize,Sequilize)

exports.empregado =(req,res) =>{
 res.render("adcionar",{layout:false})
}
exports.inserir = (req,res) =>
    {
        const dataE = {
            nome:req.body.nome,
            sal_liquido:req.body.sal_liquido,
            departamento:req.body.departamento,
            sal_bruto:req.body.sal_bruto
        };
    
        empregadosModel.create(dataE).then(data=> {
            console.log("empregado adcionado!");
            res.redirect('/');
        }).catch(err => {
            console.log("Error" + err);
        })
    
    }