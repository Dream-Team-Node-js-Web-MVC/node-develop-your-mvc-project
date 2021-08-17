const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const { userRouter, productRouter, workerRouter } = require("./routes");
const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: config.client.URL,
  })
);

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/workers", workerRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "root page!",
  });
});

module.exports = app;
