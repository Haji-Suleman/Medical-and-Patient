import { availability } from "../controllers/availabilityController.js";
import {
  addDoctorUser,
  DoctorList,
  loginDoctorUser,
} from "../controllers/doctorController.js";
import { requestHandling, showRequests } from "../controllers/request.js";
import express from "express";

const doctorRoutes = express.Router();

doctorRoutes.post("/register", addDoctorUser);
doctorRoutes.post("/data", DoctorList);
doctorRoutes.post("/login", loginDoctorUser);
doctorRoutes.post("/availability", availability);
doctorRoutes.post("/request", requestHandling);
doctorRoutes.post("/showrequest", showRequests);
export default doctorRoutes;
