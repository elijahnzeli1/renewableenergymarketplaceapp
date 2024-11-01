import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true
  },
  type: {
    type: String,
    enum: ['solar', 'wind', 'hydro'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  renewable_percentage: {
    type: Number,
    required: true
  },
  contract_length: {
    type: Number,
    required: true
  },
  description: String,
  features: [String],
  terms_conditions: String
}, {
  timestamps: true
});

export default mongoose.model('Plan', planSchema);
