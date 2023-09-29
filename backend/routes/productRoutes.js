import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", protect, admin, createProduct);

export default router;
 