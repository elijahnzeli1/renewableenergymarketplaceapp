import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: String,
  types: [{
    type: String,
    enum: ['solar', 'wind', 'hydro']
  }],
  rating: {
    type: Number,
    default: 0
  },
  location: String,
  description: String,
  certifications: [String],
  contactInfo: {
    email: String,
    phone: String,
    website: String
  }
}, {
  timestamps: true
});

export default mongoose.model('Provider', providerSchema);