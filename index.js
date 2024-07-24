import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import userRoute from "./src/routes/user.route.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users", userRoute);

// catch all route
app.all("*", (req, res) => {
  res.status(404);
  res.json("Page not found");
});

connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () =>
      console.log(`server is listening on port http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error.message);
  });
