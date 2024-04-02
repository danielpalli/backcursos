import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Code is required'],
  },
  discountPercent: {
    type: Number,
    required: [true, 'Discount percent is required'],
  }, 
  cant: {
    type: Number,
    required: [true, 'Cant is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course is required'],
  },
});

export const CouponModel = mongoose.model('Coupon', couponSchema);
