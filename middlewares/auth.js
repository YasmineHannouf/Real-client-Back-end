import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    // console.log(req.userData);
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth failed",
    });
  }
};