const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token; // optional chaining to avoid errors

    if (!token) {
        return res.redirect("/api/loginpage"); // use absolute path
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.redirect("/api/loginpage"); // invalid token
    }
};

module.exports = verifyToken;
