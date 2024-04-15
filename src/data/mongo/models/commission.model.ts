import mongoose from 'mongoose';

const commissionSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Commission code is required'],
  },
  availablePlaces: {
    type: Number,
    required: [true, 'Available places are required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isArchive: {
    type: Boolean,
    default: false,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Teacher is required'],
  },
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  assistants: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
});

export const CommissionModel = mongoose.model('Commission', commissionSchema);
