const isLogin = (req, res, next) => {
    if (req.user) {
      req.body.UserId = req.user.id;
      console.log("req.user: ", req.user, "body: ", req.body);
      next();
    } else {
      res.redirect("/userRoute/login");
    }
  };
  
  
  
module.exports = isLogin