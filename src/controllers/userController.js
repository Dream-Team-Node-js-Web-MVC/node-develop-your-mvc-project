const db = require("../models");

//TODO: we need to think about the way of register and login
const register = async (req, res, next) => {
  const { uid, email } = req.user;
  try {
    const user = await db.User.findOne({ email });
    console.log(user ? true : false);
    if (user) {
      return res.status(200).send({ data: { email: email } });
    }
    if (!user) {
      await db.User.create({
        firebase_id: uid,
        email: email,
      });
    }
    res.status(201).send({
      data: {
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await db.User.find().lean();
    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const user = await db.User.find({ _id: userId }).lean();
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id: userId } = req.params;
  const { firstName, lastName, address, phone, email, password } = req.body;
  const encryptedPassword = await encryptString(password);

  try {
    const updatedUser = await db.User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          firstName,
          lastName,
          address,
          phone,
          email,
          password: encryptedPassword,
        },
      },
      { new: true }
    );
    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const result = await db.User.deleteOne({ _id: userId }).lean();
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "A user successfully deleted",
      });
    } else {
      res.status(500).send({
        data: "Failed to delete a user",
      });
    }
  } catch (error) {
    next(error);
  }
};
const signOut = async (req, res) => {
  req.signOut();

  res.status(200).send({
    data: "OK",
  });
};

module.exports = {
  register,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  signOut,
};
