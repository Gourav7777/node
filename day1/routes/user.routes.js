const express = require ("express")
const { handlePost, handleGet, handleUpdate, handleDelete, getLoginPage, getSignUp, handleLogin, genOtp, passwordReset } = require("../controllers/user.controller")
const passport = require("passport");
const isExists = require("../middleware/validate");
const userRoute  = express.Router()




userRoute.post("/", handlePost)
userRoute.get("/",handleGet)

userRoute.patch("/:id",handleUpdate)
userRoute.delete("/:id",handleDelete)
userRoute.get("/login", getLoginPage);
userRoute.get("/signup", getSignUp);
userRoute.post("/login", handleLogin)
userRoute.post("/passportLogin", passport.authenticate("local"), (req, res) => {
    res.send("logged in");
  });
userRoute.get("/admin",isExists,(req, res) => {


    res.send({user:req.user,msg:"welcome"})
    }) 
    
userRoute.post("/otp", genOtp)    

userRoute.post("/password-reset", passwordReset)
module.exports = userRoute