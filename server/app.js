import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import contactsRouter from "./routes/contacts.js";
import userRouter from "./routes/user.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Set strictQuery option to false
mongoose.set("strictQuery", false);

// Routes
app.use("/contacts", contactsRouter);
app.use("/users", userRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, server site");
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
