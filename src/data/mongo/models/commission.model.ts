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
  isActived: {
    type: Boolean,
    default: true,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course is required'],
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
  assistant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
});

export const CommissionModel = mongoose.model('Commission', commissionSchema);
  