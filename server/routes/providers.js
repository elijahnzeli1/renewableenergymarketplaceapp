import express from 'express';
import Provider from '../models/Provider.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all providers
router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get provider by ID
router.get('/:id', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }
    res.json(provider);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create provider (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const provider = new Provider(req.body);
    await provider.save();
    res.status(201).json(provider);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update provider (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }
    res.json(provider);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;