
require("dotenv").config();

const dns = require("node:dns");

if (process.platform === "win32") {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Campus Connect Backend is Running!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Campus Connect API is working!"
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
