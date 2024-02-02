require("dotenv").config();
const serverPort = process.env.PORT;
const mongodbURI = process.env.MONGODB_ATLAS_URL;

module.exports = { serverPort, mongodbURI };
