import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Course name is required'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
  },
  img: {
    type: String,
    default: 'https://via.placeholder.com/150',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  commissions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Commission',
    default: [],
  },
});

export const CourseModel = mongoose.model('Course', courseSchema);
