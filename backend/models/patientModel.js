import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});
const patientLoginModel =
  mongoose.models.patientUser || mongoose.model("patientUser", patientSchema);

export default patientLoginModel;
