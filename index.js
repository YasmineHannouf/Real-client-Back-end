import express from "express";
const app = express();

import cookieParser from "cookie-parser";
import contactusRoutes from "./routes/contactusRoute.js";

// import and config dotenv
import dotenv from "dotenv";
dotenv.config();

// import db connection
import connectDB from "./config/db.js";

// import routes



connectDB();
app.use(express.json());

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong";
    return res.status(errStatus).json({
      success: false,
      message: errMessage,
      stack: err.stack,
    });
  });

  app.use('/api/contactus',contactusRoutes);
app.listen(5000, () => {
    console.log("listening on port 5000");
  });