import { loginUser, registerUser } from "../controllers/patientController.js";
import express from "express";
const patientRoutes = express.Router();
patientRoutes.post("/register", registerUser);
patientRoutes.post("/login",loginUser)
export default patientRoutes;
