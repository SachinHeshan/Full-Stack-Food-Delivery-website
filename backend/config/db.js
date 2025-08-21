import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://SachinHeshan:224466@cluster0.hbd429x.mongodb.net/food-del",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ DB Connected");
  } catch (err) {
    console.error("❌ DB Connection Error:", err);
    process.exit(1);
  }
};
