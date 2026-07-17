import mongoose from "mongoose";
import OrdersSchema from "../schemas/OrdersSchema.js";

const OrderssModel = mongoose.model("orders", OrdersSchema);

export default OrdersModel;
