const express = require("express");
const { getAllUser, createUser } = require("../controllers/usersController");
const userRoute = express.Router();

userRoute.post("/", createUser);
userRoute.get("/", getAllUser);

module.exports = userRoute;
