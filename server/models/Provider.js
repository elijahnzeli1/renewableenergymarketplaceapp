// models/Provider.js
const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., solar, wind
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    pricing: { type: Number, required: true },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Provider", providerSchema);
