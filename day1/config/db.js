const { Sequelize } = require("sequelize");


const db =  new Sequelize("user", "root", "bundiwal007",{
    host: "localhost",
    dialect: "mysql"
})


module.exports = db