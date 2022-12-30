import "dotenv/config";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URL);
    console.log("DB Connected !!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
