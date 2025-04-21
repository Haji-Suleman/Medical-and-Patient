import DoctorRegisterModel from "../models/doctorModel.js";

export const addDoctorUser = async (req, res) => {
  const { name, email, specialization, password } = req.body;
  const doctoregister = new DoctorRegisterModel({
    name,
    email,
    specialization,
    password,
  });

  try {
    await doctoregister.save();
    console.log("Doctor Added");
    return res.json({ success: true, message: "Doctor Added" });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Error while adding the doctor",
    });
  }
};
