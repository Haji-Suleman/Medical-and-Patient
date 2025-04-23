import { loginUser, registerUser, userData } from "../controllers/patientController.js";
import express from "express";
const patientRoutes = express.Router();
patientRoutes.post("/register", registerUser);
patientRoutes.post("/login",loginUser)
patientRoutes.post("/data",userData)
export default patientRoutes;