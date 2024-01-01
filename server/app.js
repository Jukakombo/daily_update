import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import contactsRouter from "./routes/contacts.js";
import newsRouter from "./routes/news.js";
import commentRouter from "./routes/comment.js";
import coursesRouter from "./routes/course.js";
import registrationsRouter from "./routes/registrations.js";
import ngoRouter from "./routes/ngodata.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Routes
app.use("/users", userRouter);
app.use("/contacts", contactsRouter);
app.use("/news", newsRouter);
app.use("/comment", commentRouter);
app.use("/course", coursesRouter);
app.use("/registration", registrationsRouter);
app.use("/ngodatas", ngoRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, server site");
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
