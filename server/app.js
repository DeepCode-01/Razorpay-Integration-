import express from "express";
import PaymentRoute from "./routes/payment.js";

import { config } from "dotenv";

config({ path: "./config/config.env" });

export const app = express();

app.use("/api", PaymentRoute)