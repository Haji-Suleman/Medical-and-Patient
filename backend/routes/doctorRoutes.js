import { addDoctorUser } from "../controllers/doctorController.js";
import express from "express";

const doctorRoutes = express.Router();

doctorRoutes.post("/register", addDoctorUser);

export default doctorRoutes;
