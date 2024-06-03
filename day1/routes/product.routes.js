const { Router } = require("express");

const isLogin = require("../middleware/loginChecker");
const { getProducts, createProduct, addProduct, getProductPage } = require("../controllers/product.controller");

const productRoute=Router()

productRoute.get('/', isLogin, getProducts)
productRoute.post('/', isLogin, createProduct)
productRoute.get("/add", isLogin, addProduct)
productRoute.get("/products",isLogin, getProductPage)

// productRoute.get('/:id',isLogin,deleteProduct)
module.exports=productRoute