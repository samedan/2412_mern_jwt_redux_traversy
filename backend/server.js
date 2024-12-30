import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Forma data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.setDefaultEncoding("server is rady");
});

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
