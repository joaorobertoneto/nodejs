const Sequelize = require("sequelize");
sequelize = new Sequelize('empregados','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports ={
    Sequelize,
    sequelize
}
