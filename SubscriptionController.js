import SubscriptionModel from "./SubscriptionModel.js";

export const handleSubscribe = async (req, res) => {
  let { email } = req.body;
  if (email) {
    const isSubscribed = await SubscriptionModel.findOne({ email });
    try {
      if (isSubscribed) {
        res.status(200).json({
          success: false,
          message: "You are already Subscribed!",
        });
      } else {
        const sub = await SubscriptionModel.create({
          email,
        });
        res.status(200).json({
          success: true,
          message: "Successfully Subscribed!",
        });
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ success: false, message: "Server Error!" });
    }
  }
};
