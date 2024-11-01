// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/user");
const providerRoutes = require("./routes/provider");
const reviewRoutes = require("./routes/review");
const planRoutes = require("./routes/plans");
const notificationRoutes = require("./routes/notifications");
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample route
app.get("/", (req, res) => {
  res.send("Welcome to the Renewable Energy Marketplace API");
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Add routes
app.use("/api/users", userRoutes);
// Proverder routes
app.use("/api/providers", providerRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api", planRoutes);
app.use("/api", notificationRoutes); 