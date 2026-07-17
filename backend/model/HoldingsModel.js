import mongoose from "mongoose";
import HoldingsSchema from "../schemas/HoldingsSchema.js";

const HoldingsModel =
  mongoose.models.Holding ||
  mongoose.model("Holding", HoldingsSchema, "holdings");

export default HoldingsModel;
