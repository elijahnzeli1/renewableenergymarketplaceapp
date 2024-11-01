const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

// Create a new campaign
router.post("/campaigns", async (req, res) => {
  const { title, description, startDate, endDate, location, goals, imageUrl } =
    req.body;

  const newCampaign = new Campaign({
    title,
    description,
    startDate,
    endDate,
    location,
    goals,
    imageUrl,
  });

  try {
    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating campaign", details: error.message });
  }
});

// Read all campaigns
router.get("/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching campaigns", details: error.message });
  }
});

// Read a specific campaign by ID
router.get("/campaigns/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json(campaign);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching campaign", details: error.message });
  }
});

// Update a campaign
router.put("/campaigns/:id", async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCampaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json(updatedCampaign);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating campaign", details: error.message });
  }
});

// Delete a campaign
router.delete("/campaigns/:id", async (req, res) => {
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!deletedCampaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting campaign", details: error.message });
  }
});

module.exports = router;
