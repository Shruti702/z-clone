import mongoose from "mongoose";
import PositionsSchema from "../schemas/PositionsSchema.js";

const PositionsModel =
  mongoose.models.Position ||
  mongoose.model("Position", PositionsSchema, "positions");

export default PositionsModel;
