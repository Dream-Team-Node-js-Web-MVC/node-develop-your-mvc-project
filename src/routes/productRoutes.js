const Router = require("express").Router;
const { productController } = require("../controllers");

const productRouter = Router();

productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.patch("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);
//TODO : cart router
module.exports = {
  productRouter,
};
