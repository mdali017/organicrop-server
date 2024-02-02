// const mongoose = require('mongoose');
const User = require("../models/usersModel");
const users = [
  {
    id: 1,
    name: "ali",
    age: 21,
  },
  {
    id: 2,
    name: "Hasan",
    age: 22,
  },
  {
    id: 3,
    name: "Mohabbat",
    age: 23,
  },
];

// create a user
const createUser = async (req, res) => {
  const user = req.body;
  const result = await User.create(user);
  res.status(201).json({
    message: "User create successfull",
    result,
  });
};

// get all user
const getAllUser = async (req, res) => {
  const result = await User.find();
  res.status(200).json({
    message: "All User is Here",
    result,
  });
};

module.exports = { getAllUser, createUser };
