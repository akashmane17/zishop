import asyncHandler from "../middleware//asyncHandler.js";
import Order from "../models/orderModel.js";

/**
 * @desc Create new order
 * @route POST /api/orders
 * @access Private
 */
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order Items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((order) => ({
        ...order,
        product: order._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

/**
 * @desc Get logged in user orders
 * @route GET /api/orders/myorders
 * @access Private
 */
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

/**
 * @desc Update Order to paid
 * @route PUT /api/orders/:id/pay
 * @access Private
 */
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  return res.send("Update order to paid");
});

/**
 * @desc Update Order to delivered
 * @route PUT /api/orders/:id/deliver
 * @access Private/Admin
 */
export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  return res.send("Update Order to delivered");
});

/**
 * @desc get Order By Id
 * @route GET /api/orders/:id
 * @access Private
 */
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  
  if(order){
    return res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order Not found");
  }
});

/**
 * @desc Get all orders
 * @route GET /api/orders
 * @access Private/Admin
 */
export const getOrders = asyncHandler(async (req, res) => {
  return res.send("Get all orders");
});
