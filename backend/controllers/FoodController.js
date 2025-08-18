import FoodModel from "../models/FoodModel.js";
import fs from "fs";

export const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const food = new FoodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.filename,
    });

    await food.save();
    res.json({ success: true, message: "Food added successfully", food });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// all food list 

export const listfood = async (req, res) => {
    try {
        const foods = await FoodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching foods" });
    }
};


    //remove food item

  export const removefood = async (req,res) => {
    try {
        const food = await FoodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        
        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"food removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"});
    }
}
