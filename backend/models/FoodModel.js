import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

// Use existing model if it exists, otherwise create new
const FoodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default FoodModel;
