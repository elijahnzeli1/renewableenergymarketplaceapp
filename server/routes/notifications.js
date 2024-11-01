const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// Create a new notification
router.post("/notifications", async (req, res) => {
  const { userId, message, type } = req.body;

  const newNotification = new Notification({
    userId,
    message,
    type,
  });

  try {
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating notification", details: error.message });
  }
});

// Get notifications for a user
router.get("/notifications/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({
      userId: req.params.userId,
    });
    res.status(200).json(notifications);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching notifications", details: error.message });
  }
});

// Mark notification as read
router.put("/notifications/:id", async (req, res) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!updatedNotification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    res.status(200).json(updatedNotification);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating notification", details: error.message });
  }
});

// Delete a notification
router.delete("/notifications/:id", async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      req.params.id
    );
    if (!deletedNotification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting notification", details: error.message });
  }
});

module.exports = router;
