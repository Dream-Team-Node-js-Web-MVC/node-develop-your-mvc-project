const Router = require("express").Router;
const { workerController } = require("../controllers");

const workerRouter = Router();

workerRouter.post("/", workerController.createWorker);
workerRouter.get("/", workerController.getWorkers);
workerRouter.get("/:id", workerController.getWorkerById);
workerRouter.patch("/:id", workerController.updateWorker);
workerRouter.delete("/:id", workerController.deleteWorker);

module.exports = {
  workerRouter,
};
