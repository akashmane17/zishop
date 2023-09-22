import asyncHandler from "../middleware//asyncHandler.js";
import Product from "../models/productModel.js";

/**
 * @desc Fetch all products
 * @route GET /api/products
 * @access Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
});

/**
 * @desc Fetch a products
 * @route GET /api/products/:id
 * @access Public
 */
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Resource not found");
  }

  return res.json(product);
});
