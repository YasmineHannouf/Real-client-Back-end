import express from "express";
const app = express();

import cookieParser from "cookie-parser";

// import cors and use it
import cors from "cors";
app.use(cors());

// import and config dotenv
import dotenv from "dotenv";
dotenv.config();

// import db connection
import connectDB from "./config/db.js";

// import routes
import teamRoutes from "./routes/team.js";
import adminRoutes from "./routes/adminRoute.js";

connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static("./uploads"));

app.use("/team", teamRoutes);
app.use("/admin", adminRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
