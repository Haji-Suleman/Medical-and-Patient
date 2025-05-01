import user from "../models/user.js";
import jwt from "jsonwebtoken";
export const availability = async (req, res) => {
  const { token, data } = req.body;
  try {
    const id = jwt.verify(token, process.env.JWT_SECRET).id;
    const User = await user.findByIdAndUpdate(id, { doctorAvailability: data });
    if (data) {
      return res.json({ success: true, User });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};
