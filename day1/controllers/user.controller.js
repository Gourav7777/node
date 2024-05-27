const User = require("../models/user.model")


const handlePost = async(req,res)=>{
  
    try {
        
        let user = await  User.create(req.body)
        
        res.send(user)
    } catch (error) {
        res.send(error)
    }

}

const handleGet = async (req, res) => {
    try {
      let users = await User.findAll();
  
      res.send(users);
    } catch (error) {
      res.sen(error);
    }
  };


  const handleUpdate = async (req, res) => {
    let { id } = req.params;
    let user = await User.findByPk(id);
    user = await user.update(req.body);
    res.send(user);
  };
  
  const handleDelete = async (req, res) => {
    let { id } = req.params;
    try {
      let user = await User.findByPk(id);
      if (!user) {
        res.send("user not found");
      }
      user.destroy();
  
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  };

  const getSignUp = (req, res) => {
    res.render("signin");
  };
  const getLoginPage = (req, res) => {
    res.render("login");
  };

module.exports={handlePost, handleGet,handleUpdate,handleDelete,getSignUp, getLoginPage}