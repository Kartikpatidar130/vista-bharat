require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");
const path = require("path");
const connect = require("./db/connect");
const cookieParser = require("cookie-parser");



app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", router);

const start = async () => {
  const PORT = process.env.PORT || 8000; 
  try {
    await connect(process.env.MONGO_URL);
    console.log("✅ Database connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
};

start();
