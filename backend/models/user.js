import mongoose from "mongoose";

const model = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  specialization: { type: String },
  role: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  doctorAvailability: { type: Object, default: {} },
  request: { type: Array, default: [] },
});

const user = mongoose.models.user || mongoose.model("user", model);

export default user;
