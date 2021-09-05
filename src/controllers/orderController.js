const db = require("../models");

const create = async (req, res) => {
  let { userData, cart, total } = req.body;
  try {
    const newOrder = await db.Order.create({ userData, cart, total });
    res.status(200).send({
      data: {
        userData: newOrder.userData,
        cart: newOrder.cart,
        total: newOrder.total,
      },
    });
    // console.log(newOrder);
  } catch (error) {
    res.send({ ok: false });
  }
};

module.exports = {
  create,
};
