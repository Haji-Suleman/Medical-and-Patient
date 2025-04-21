import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("🚀 Attempting to connect to MongoDB...");
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/doctor-patient"
    );
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    process.exit(1);
  }
};
// The connection fo the database
