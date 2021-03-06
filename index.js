const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/user");

const app = express();

require("dotenv").config();

connectDB();

app.use(express.json());

app.use("/api/auth", userRoutes);

app.listen(process.env.port, () => {
  console.log(`server is running on ${process.env.port}`);
});
