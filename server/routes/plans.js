const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

// Create a new plan
router.post("/plans", async (req, res) => {
  const {
    providerId,
    name,
    description,
    pricing,
    contractLength,
    renewableEnergyPercentage,
  } = req.body;

  const newPlan = new Plan({
    providerId,
    name,
    description,
    pricing,
    contractLength,
    renewableEnergyPercentage,
  });

  try {
    await newPlan.save();
    res
      .status(201)
      .json({ message: "Plan created successfully", plan: newPlan });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating plan", details: error.message });
  }
});

// Get all plans for a specific provider
router.get("/plans/:providerId", async (req, res) => {
  const { providerId } = req.params;

  try {
    const plans = await Plan.find({ providerId });
    res.status(200).json(plans);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching plans", details: error.message });
  }
});

// Update a plan
router.put("/plans/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    pricing,
    contractLength,
    renewableEnergyPercentage,
  } = req.body;

  try {
    const updatedPlan = await Plan.findByIdAndUpdate(
      id,
      { name, description, pricing, contractLength, renewableEnergyPercentage },
      { new: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    res
      .status(200)
      .json({ message: "Plan updated successfully", plan: updatedPlan });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating plan", details: error.message });
  }
});

// Delete a plan
router.delete("/plans/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlan = await Plan.findByIdAndDelete(id);

    if (!deletedPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting plan", details: error.message });
  }
});

module.exports = router;
