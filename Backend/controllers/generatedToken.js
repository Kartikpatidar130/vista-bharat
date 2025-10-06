const jwt = require("jsonwebtoken");

const generatedToken = (req, res) => {
    const db = { username: "Kartik@", password: "9294754515" };
    
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Please enter username and password" });
    }

    if (username === db.username && password === db.password) {
        const payload = { username: db.username };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
        console.log(token)
        return res.status(200).json({ message: "Login successful", token });
    } else {
        return res.status(401).json({ message: "Invalid username or password" });
    }
};

module.exports = generatedToken;
