const express = require("express");
const { getallProducts } = require("../controllers/productController");
const productroute = express.Router();

productroute.get("/", getallProducts);

module.exports = productroute;
