const express = require ("express");
const db = require("./config/db");
const userRoute = require("./routes/user.routes");

const session = require("express-session");
const localStrategyInitializer = require("./middleware/userValidate");
const passport = require("passport");


const app = express()


app.use(express.urlencoded());
app.use(session({ secret: "secret-key" }));
app.use(express.json())
app.use(express.static("public"));

localStrategyInitializer(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use("/userRoute", userRoute)
app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/",(req,res)=>{
  
  res.render("index")
  // res.send("welcome here ")
})


app.listen(8080, async()=>{
  console.log("server connected")
  
  await db.sync()
  console.log("Database connected")
})