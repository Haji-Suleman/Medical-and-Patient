import { addDoctorUser, DoctorList } from "../controllers/doctorController.js";
import express from "express";

const doctorRoutes = express.Router();

doctorRoutes.post("/register", addDoctorUser);
doctorRoutes.post("/list",DoctorList)
export default doctorRoutes;
