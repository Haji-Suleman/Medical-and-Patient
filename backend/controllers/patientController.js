import user from "../models/user.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const loginUser = async (req, res) => {
  const { email, password ,role} = req.body;
  
  try {
    const patient = await user.findOne({ email });
    if (!patient) {
      return res.json({ success: false, message: "User Does not exists" });
    }
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const token = createToken(patient._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

//creating token
const createToken = (id) => {
  console.log(id);
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  // if user is already exists
  const exists = await user.findOne({ email });
  if (exists) {
    return res.json({ success: false, message: "User already exists" });
  }
  // handling if the email is correct or not
  if (!validator.isEmail(email)) {
    return res.json({ success: false, message: "Please enter a valid email" });
  }
  if (password.length < 8) {
    return res.json({
      success: false,
      message: "Please enter a strong password",
    });
  }
  // hash the password

  // first of all we have to define the salting gen10
  const salt = await bcrypt.genSalt(10);
  // hashing the password
  const hashedpassword = await bcrypt.hash(password, salt);

  const PatientUser = new user({
    name,
    password: hashedpassword,
    email,
    role,
    doctorAvailability: {}
  });

  try {
    const newUser = await PatientUser.save();
    const token = createToken(newUser._id);
    console.log("Patient saved");
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Error",
    });
  }
};
export const userData = async (req, res) => {
  const { token } = req.body;
  const id = jwt.verify(token, process.env.JWT_SECRET);
  console.log("The data is the", id);
  const data = await user.findById(id.id);
  if (!data) {
    return res.json({ success: false, message: "Error" });
  }
  return res.json({ success: true, data });
};
