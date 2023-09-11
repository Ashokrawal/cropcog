import mongoose, { Schema } from "mongoose";

const shippingSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: String,
  apartment: String,
  city: String,
  state: String,
  postalCode: Number,
  phone: Number,
});

const ShippingModel =
  mongoose.models.ShippingModel ||
  mongoose.model("ShippingModel", shippingSchema);

export default ShippingModel;
