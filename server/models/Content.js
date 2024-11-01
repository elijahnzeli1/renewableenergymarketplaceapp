const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true }, // e.g., article, guide, video
    description: { type: String, required: true },
    url: { type: String, required: true }, // URL for video or article
    tags: [String], // Tags for categorization
    publishedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
