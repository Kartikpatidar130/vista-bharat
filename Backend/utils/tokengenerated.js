const jwt = require("jsonwebtoken");

const tokenGenerate = (req, res) => {
  const { email, username } = req.body;
  // console.log("Email:", email);
  // console.log("Username:", username);

  const payload = { email, username };

  if (email === "patidarkartik575@gmail.com" && username === "kartik0907") {
    const secret_key = process.env.SECRET_KEY || "mysecret"; // fallback if env missing
    const token = jwt.sign(payload, secret_key, { expiresIn: "1h" });

    // console.log(`Generated token: ${token}`);
    return res.json({ token }); // ✅ send token back
  }

  // if wrong credentials
  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = tokenGenerate;
