const express = require ("express");
const db = require("./config/db");
const userRoute = require("./routes/user.routes");


const app = express()

app.use(express.json())

app.use("/userRoute", userRoute)
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"));

app.get("/",(req,res)=>{
  
  res.render("index")
  // res.send("welcome here ")
})


app.listen(8080, async()=>{
  console.log("server connected")
  
  await db.sync()
  console.log("Database connected")
})