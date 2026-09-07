require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());

// your existing routes/middleware here

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});