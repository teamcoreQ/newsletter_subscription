import mongoose, { Schema } from "mongoose";
const SubscriptionSchema = new Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema);
export default SubscriptionModel;
