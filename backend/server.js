import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import FoodRouter from "./routes/FoodRouter.js"
import path from "path";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/carRouter.js";
import dotenv from 'dotenv';



const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve uploaded images
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// DB connection
connectDB();

// Test route
app.get("/", (req, res) => res.send("API WORKING"));

// apiend point
app.use("/api/food", FoodRouter);  // This matches your current setup
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);

dotenv.config();



// Start server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
