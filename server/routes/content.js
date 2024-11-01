const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

// Create a new educational content
router.post("/content", async (req, res) => {
  const { title, type, description, url, tags } = req.body;

  const newContent = new Content({
    title,
    type,
    description,
    url,
    tags,
  });

  try {
    const savedContent = await newContent.save();
    res.status(201).json(savedContent);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating content", details: error.message });
  }
});

// Read all educational content
router.get("/content", async (req, res) => {
  try {
    const contentList = await Content.find();
    res.status(200).json(contentList);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching content", details: error.message });
  }
});

// Read a specific content by ID
router.get("/content/:id", async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ error: "Content not found" });
    }
    res.status(200).json(content);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching content", details: error.message });
  }
});

// Update an educational content
router.put("/content/:id", async (req, res) => {
  try {
    const updatedContent = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContent) {
      return res.status(404).json({ error: "Content not found" });
    }
    res.status(200).json(updatedContent);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating content", details: error.message });
  }
});

// Delete an educational content
router.delete("/content/:id", async (req, res) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({ error: "Content not found" });
    }
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting content", details: error.message });
  }
});

module.exports = router;
