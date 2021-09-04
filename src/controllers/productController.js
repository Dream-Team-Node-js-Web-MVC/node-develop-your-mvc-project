const db = require("../models");

const createProduct = async (req, res, next) => {
  const { title, description, price, stock, images } = req.body;
  try {
    const product = await db.Product.create({
      title,
      description,
      price,
      stock,
      images,
    });
    res.status(200).send({
      data: {
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        images: product.images,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Need to make the petition with query parameters as "/products?page=2&size=2"
const getProducts = async (req, res, next) => {
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

    const products = await db.Product.find().limit(limit).skip(skip).lean();
    // const products = await db.Product.find().lean();
    res.status(200).send({
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await db.Product.findOne({ _id: productId }).lean();
    res.status(200).send({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { id: productId } = req.params;
  const { title, description, price, stock, images } = req.body;

  try {
    const updatedProduct = await db.Product.findOneAndUpdate(
      {
        _id: productId,
      },
      {
        $set: {
          title,
          description,
          price,
          stock,
          images,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).send({
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const result = await db.Product.deleteOne({ _id: productId }).lean();
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "A product successfully deleted",
      });
    } else {
      res.status(500).send({
        data: "Failed to delete a product",
      });
    }
  } catch (error) {
    next(error);
  }
};
//TODO : we may need this function here to manage product in cart
const getCart = async (req, res, next) => {
  let ids = [];
  req.body.cart.map((ele) => {
    console.log(ele);
    ids.push(ele._id);
  });
  try {
    const products = await db.Product.find({
      _id: { $in: ids },
    });
    res.send({ products });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getCart,
};
