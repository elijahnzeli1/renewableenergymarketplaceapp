const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String }, // Optional: Location of the campaign
    goals: { type: String }, // Optional: Goals of the campaign
    imageUrl: { type: String }, // Optional: URL for a campaign image
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users participating in the campaign
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", campaignSchema);
