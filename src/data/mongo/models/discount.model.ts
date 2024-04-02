import mongoose from 'mongoose';

const discountSchema = new mongoose.Schema({
  discountPercent: {
    type: Number,
    required: [true, 'Discount percent is required'],
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export const DiscountModel = mongoose.model('Discount', discountSchema);
