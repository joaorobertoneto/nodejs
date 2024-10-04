const Sequelize = require("sequelize");
sequelize = new Sequelize('empregados','root','mysqluser',{
    host:'localhost',
    dialect:'mysql'
})

module.exports ={
    Sequelize,
    sequelize
}
