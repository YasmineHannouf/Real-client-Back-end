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
import trainingRoutes from "./routes/training.js";
import AboutusRoutes from "./routes/aboutus.js";
import serviceRoutes from "./routes/service.js";
import contactusRoutes from "./routes/contactusRoute.js";
import eventsRoutes from "./routes/eventsRoute.js";
import projectRoutes from "./routes/project.js";
import KidsRouter from "./routes/kidsRoute.js";

connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.use("/uploads", express.static("./uploads"));

app.use("/team", teamRoutes);
app.use("/admin", adminRoutes);
app.use("/training", trainingRoutes);
app.use("/about",AboutusRoutes)
app.use("/kid", KidsRouter);
app.use("/service",serviceRoutes)
app.use("/project", projectRoutes);
app.use('/api/contactus',contactusRoutes);
app.use('/api/events',eventsRoutes)



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
