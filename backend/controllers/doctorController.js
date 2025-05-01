import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import user from "../models/user.js";
export const addDoctorUser = async (req, res) => {
  const { name, email, specialization, password, role } = req.body;

  try {
    if (role !== "doctor") {
      return res.json({
        success: false,
        message: "Role must be the patient doctor",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is not correct" });
    }
    const exists = await user.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    const salting = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salting);
    const doctoregister = new user({
      name,
      email,
      specialization,
      password: hashedpassword,
      role,
      doctorAvailability:{}
    });
    await doctoregister.save();
    console.log("Doctor Added");
    const token = createToken(doctoregister._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Error while adding the doctor",
    });
  }
};
export const DoctorList = async (req, res) => {
  try {
    const data = await user.find({role:"doctor"});
    return res.send({ success: true, data });
  } catch (error) {
    console.log(error);
  }
};
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
export const loginDoctorUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (role !== "doctor") {
      return res.json({
        success: false,
        message: "Role must be the patient doctor",
      });
    }
    const exists = await user.findOne({ email });
    if (!exists) {
      return res.json({ success: false, message: "User does not exists" });
    }
    const isMatch = await bcrypt.compare(password, exists.password);
    if (!isMatch) {
      return res.json({ success: true, message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};