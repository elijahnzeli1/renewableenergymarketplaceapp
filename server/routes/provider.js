const express = require("express");
const Provider = require("../models/Provider"); // Adjust the path to your Provider model
const router = express.Router();

// Create a new provider
router.post("/", async (req, res) => {
  const { name, type, location, capacity, pricing, description } = req.body;

  // Validate required fields
  if (!name || !type || !location || !capacity || !pricing) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newProvider = new Provider({
      name,
      type,
      location,
      capacity,
      pricing,
      description,
    });

    await newProvider.save();
    res.status(201).json(newProvider);
  } catch (error) {
    console.error("Error creating provider:", error);
    res.status(500).json({ error: "Error creating provider" });
  }
});

// Get all providers
router.get("/", async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    console.error("Error fetching providers:", error);
    res.status(500).json({ error: "Error fetching providers" });
  }
});

// Get a specific provider by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const provider = await Provider.findById(id);
    if (!provider) {
      return res.status(404).json({ error: "Provider not found" });
    }
    res.status(200).json(provider);
  } catch (error) {
    console.error("Error fetching provider:", error);
    res.status(500).json({ error: "Error fetching provider" });
  }
});

// Update a provider by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, type, location, capacity, pricing, description } = req.body;

  try {
    const updatedProvider = await Provider.findByIdAndUpdate(
      id,
      { name, type, location, capacity, pricing, description },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedProvider) {
      return res.status(404).json({ error: "Provider not found" });
    }

    res.status(200).json(updatedProvider);
  } catch (error) {
    console.error("Error updating provider:", error);
    res.status(500).json({ error: "Error updating provider" });
  }
});

// Delete a provider by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProvider = await Provider.findByIdAndDelete(id);
    if (!deletedProvider) {
      return res.status(404).json({ error: "Provider not found" });
    }
    res.status(204).json(); // No content
  } catch (error) {
    console.error("Error deleting provider:", error);
    res.status(500).json({ error: "Error deleting provider" });
  }
});

module.exports = router;
