const db = require("../models");
const createWorker = async (req, res, next) => {
  const { fullName, email, password, role, profileImage } = req.body;
  try {
    const worker = await db.Worker.create({
      fullName,
      email,
      password,
      role,
      profileImage,
    });
    res.status(200).send({
      data: {
        fullName: worker.fullName,
        email: worker.email,
        password: worker.password,
        role: worker.role,
        profileImage: worker.profileImage,
      },
    });
  } catch (error) {
    next(error);
  }
};
const getWorkers = async (req, res, next) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;

    const workers = await db.Worker.find().limit(limit).skip(skip).lean();
    res.status(200).send({
      data: workers,
    });
  } catch (error) {
    next(error);
  }
};

const getWorkerById = async (req, res, next) => {
  const { id: workerId } = req.params;
  try {
    const worker = await db.Worker.findOne({ _id: workerId }).lean();
    res.status(200).send({
      data: worker,
    });
  } catch (error) {
    next(error);
  }
};

const updateWorker = async (req, res, next) => {
  const { id: workerId } = req.params;
  const { fullName, email, password, role, profileImage } = req.body;

  try {
    const updatedWorker = await db.Worker.findOneAndUpdate(
      {
        _id: workerId,
      },
      {
        $set: {
          fullName,
          email,
          password,
          role,
          profileImage,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).send({
      data: updatedWorker,
    });
  } catch (error) {
    next(error);
  }
};
const deleteWorker = async (req, res, next) => {
  const { id: workerId } = req.params;
  try {
    const result = await db.Worker.deleteOne({ _id: workerId }).lean();
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "A worker successfully deleted",
      });
    } else {
      res.status(500).send({
        data: "Failed to delete a worker",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWorker,
  getWorkers,
  getWorkerById,
  updateWorker,
  deleteWorker,
};
