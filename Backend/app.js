require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");
const path = require("path");
const connect = require("./db/connect");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const allowedIPs = ["127.0.0.1" , "192.168.43.69"]; 
app.use((req,res,next)=>{
  let clientIp = req.ip ;
  if (clientIp === "::1") {
    clientIp = "127.0.0.1";
  }
  if (clientIp.startsWith("::ffff:")) {
    clientIp = clientIp.replace("::ffff:", "");
  }

//  const clientIp = req.ip ;
//  console.log(clientIp)
 if(!allowedIPs.includes(clientIp)){
    return res.status(403).send("Forbidden: Your IP is not allowed");
 }
 next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.post("/login", tokenGenerate);
app.use("/api", router);

// ,tokenVerification

app.set("view engine", "ejs");

// app.use(function(req,res,next){
//   next()
// })
const start = async () => {
  // const PORT =  8000; 
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
