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
  isActive: {
    type: Boolean,
    default: true,
  }, 
});

export const CourseModel = mongoose.model('Course', courseSchema);
