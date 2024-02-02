const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/usersRoute");
const connectDatabase = require("./config/db");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Server is running on port: ${port}`);
});
