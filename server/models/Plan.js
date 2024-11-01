const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    pricing: {
      type: Number,
      required: true,
    },
    contractLength: {
      type: String, // e.g., "12 months"
      required: true,
    },
    renewableEnergyPercentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("plans", planSchema);
