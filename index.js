const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/usersRoute");
const connectDatabase = require("./config/db");
const productroute = require("./routes/productRoute");
const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

// const corsConfig = {
//   origin: "*",
//   credential: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
app.use("/api/product", productroute);

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(port, async () => {
  // await connectDatabase();
  console.log(`Server is running on port: ${port}`);
});
