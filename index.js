const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./Src/Config/db");
const userRouter = require("./Src/Routes/UserRoute");
const productRouter = require("./Src/Routes/ProductRoute");
const CartRouter = require("./Src/Routes/CartRoute");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", CartRouter);

app.get("/", (req, res) => {
  res.send("welcome to flipkart");
});

app.listen("5050", async (req, res) => {
  try {
    await connect;
    console.log("connected to server");
  } catch (error) {
    console.log(error);
  }

  console.log("server running at port 5050");
});
