import mongoose from "mongoose";

const doctorRegisterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  specialization: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const DoctorRegisterModel =
  mongoose.models.doctorUser ||
  mongoose.model("doctorUser", doctorRegisterSchema);

export default DoctorRegisterModel;
