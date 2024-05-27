const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");


const User = db.define("User",{
    name:STRING,
    email:STRING,
    password:STRING,
    number:INTEGER
},
{
    createdAt:false,
    updatedAt:false
}
)

module.exports = User;