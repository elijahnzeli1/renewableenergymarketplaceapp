const express = require("express");
const router = express.Router();
const Review = require("../models/Review"); // Adjust path as needed
const { authenticate } = require("../middleware/auth"); // Assuming you have some authentication middleware

// Create a new review
router.post("/", authenticate, async (req, res) => {
  const { providerId, rating, comment } = req.body;
  const userId = req.user.id; // Assuming user ID is attached to req.user by auth middleware

  const newReview = new Review({ providerId, userId, rating, comment });

  try {
    await newReview.save();
    res
      .status(201)
      .json({ message: "Review created successfully", review: newReview });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating review", details: error.message });
  }
});

// Get reviews for a specific provider
router.get("/:providerId", async (req, res) => {
  const { providerId } = req.params;

  try {
    const reviews = await Review.find({ providerId }).populate(
      "userId",
      "username"
    );
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error fetching reviews", details: error.message });
  }
});

// Update a review
router.put("/:id", authenticate, async (req, res) => {
  const { rating, comment } = req.body;

  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    if (review.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Not authorized to update this review" });
    }

    review.rating = rating;
    review.comment = comment;
    await review.save();

    res.status(200).json({ message: "Review updated successfully", review });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating review", details: error.message });
  }
});

// Delete a review
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    if (review.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this review" });
    }

    await review.remove();
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error deleting review", details: error.message });
  }
});

module.exports = router;
