const Router = require("express").Router;
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/register", userController.register);
// userRouter.post("/login", userController.logIn);
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = {
  userRouter,
};
