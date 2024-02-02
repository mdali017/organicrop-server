const express = require("express");
const { getAllUser } = require("../controllers/usersController");
const userRoute = express.Router();

userRoute.get("/", getAllUser);

module.exports = userRoute;
