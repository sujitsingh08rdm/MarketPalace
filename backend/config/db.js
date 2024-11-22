import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //Mongoose itself maintains the connection internally, so you don't need to directly use conn elsewhere.
    console.log(`MONGODB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
