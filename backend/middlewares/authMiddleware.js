const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token  = req.header("Authorization")
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    user.password = undefined;

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
