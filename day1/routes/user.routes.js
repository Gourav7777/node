const express = require ("express")
const { handlePost, handleGet, handleUpdate, handleDelete, getLoginPage, getSignUp } = require("../controllers/user.controller")

const userRoute  = express.Router()




userRoute.post("/", handlePost)
userRoute.get("/",handleGet)

userRoute.patch("/:id",handleUpdate)
userRoute.delete("/:id",handleDelete)
userRoute.get("/login", getLoginPage);
userRoute.get("/signup", getSignUp);

module.exports = userRoute