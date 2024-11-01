const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust the path as necessary

const authenticate = async (req, res, next) => {
const token = jwt.sign(
  { id: "6724c8d2f3e0913a4f31209e" },
  process.env.JWT_SECRET,
  {
    expiresIn: "1h",
  }
);
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure you have JWT_SECRET in your environment variables
    req.user = await User.findById(decoded.id); // Assuming the token contains the user ID
    if (!req.user) {
      return res.status(404).json({ error: "User not found." });
    }
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = { authenticate };
