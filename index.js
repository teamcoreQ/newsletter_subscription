import express from "express";
import cors from "cors";

// uncomment it for development
// import "dotenv/config";

import { handleSubscribe } from "./SubscriptionController.js";
import { connectDb } from "./db.config.js";
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the Server !");
});

app.post("/subscribe", handleSubscribe);

app.listen(port, async () => {
  console.log("Server 🏃 at " + port);
  await connectDb();
});
