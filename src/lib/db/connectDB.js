import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb Connected ===>", process.env.MONGODB_URL);
  } catch (error) {
    console.log("error in connection==>", error);
  }
}
