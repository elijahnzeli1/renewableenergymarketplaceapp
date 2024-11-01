import express from 'express';
import Plan from '../models/Plan.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all plans
router.get('/', async (req, res) => {
  try {
    const plans = await Plan.find().populate('provider');
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get plan by ID
router.get('/:id', async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id).populate('provider');
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create plan (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update plan (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;