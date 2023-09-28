import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connetDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";

// connect to DB
connetDB();

const port = process.env.PORT || 5000;

const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
