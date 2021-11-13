require("dotenv").config();
require("./config/database").connectDB();
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", userRoutes);

module.exports = app;
