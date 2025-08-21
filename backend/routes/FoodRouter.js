import express from "express";
import { addFood,listfood,removefood } from "../Controllers/FoodController.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const FoodRouter = express.Router();

// Configure uploads directory
const uploadDir = path.join(path.resolve(), "uploads");

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9.]/g, '-');
        cb(null, uniqueSuffix + '-' + sanitizedFilename);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

// Routes
FoodRouter.post("/add", upload.single("image"), addFood);
FoodRouter.get("/list", listfood);
FoodRouter.post("/remove",removefood);



export default FoodRouter;