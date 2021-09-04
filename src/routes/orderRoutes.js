const Router = require("express").Router;
const { orderController } = require("../controllers");

const orderRouter = Router();

orderRouter.post("/", orderController.create);

module.exports = {
  orderRouter,
};
