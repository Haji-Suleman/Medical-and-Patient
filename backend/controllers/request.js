import user from "../models/user.js";
import jwt, { decode } from "jsonwebtoken";
export const requestHandling = async (req, res) => {
  try {
    const { token, doctorId, name, imageLink, number, comment, time } =
      req.body;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET).id;
    const doctorSpecialization = await user.findById(doctorId);
    const doctorResponse = await user.findByIdAndUpdate(doctorId, {
      $push: {
        request: {
          userId: decodedToken,
          name,
          imageLink,
          number,
          comment,
          time,
          doctorId,
          status: "pending",
          date: new Date(),
        },
      },
    });
    const patientRequest = await user.findByIdAndUpdate(decodedToken, {
      $push: {
        request: {
          doctorId,
          name,
          imageLink,
          number,
          comment,
          time,
          doctorId,
          status: "pending",
          date: new Date(),
          specialization: doctorSpecialization.specialization,
        },
      },
    });
    const Data = await user.findById(doctorId);
    return res.json({ success: true, Data: Data.request });
  } catch (error) {
    console.log(error);
  }
};
export const showRequests = async (req, res) => {
  const { token } = req.body;
  const doctorId = jwt.verify(token, process.env.JWT_SECRET).id;
  try {
    const show = await user.findById(doctorId);

    return res.json({ success: true, data: show.request });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};
export const statusUpdate = async (req, res) => {
  try {
    const { doctorId, token, status } = req.body;
    const id = jwt.verify(token, process.env.JWT_SECRET).id;
    const patient = user.findByIdAndUpdate(id, { status });
    const doctor = user.findByIdAndUpdate(id, { status });
  } catch (error) {
    console.log(error);
  }
};
