import express, { urlencoded } from "express";
import { connectDB } from "./config/db.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import "dotenv/config"
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/doctor", doctorRoutes);
app.use("/api/patient", patientRoutes);
connectDB();
app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(PORT, () => {
  console.log(`The port is running http://localhost:${PORT}`);
});
