const mongoose = require("mongoose");
const { mongodbURI } = require("../secret");

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongodbURI);
    console.log("MongoDB Connect Successfully");
  } catch (error) {
    console.log("Could not connect to DB:", error, toString());
  }
};

module.exports = connectDatabase;
