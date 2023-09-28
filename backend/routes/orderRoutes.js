import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/", protect, addOrderItems);

router.get("/myorders", protect, getMyOrders);

router.put("/:id/pay", protect, updateOrderToPaid);

router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

router.get("/:id", protect, getOrderById);

router.get("/", protect, admin, getOrders);

export default router;
