import express from "express";
import Aboutus from "./routes/aboutus.js";
const app = express();

import cookieParser from "cookie-parser";


// import and config dotenv
import dotenv from "dotenv";
dotenv.config();

// import db connection
import connectDB from "./config/db.js";


connectDB();
app.use(express.json());

// import routes

app.use("/aboutus",Aboutus)

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

  