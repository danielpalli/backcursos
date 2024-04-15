import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: [String],
    default: ['USER_ROLE'],
    enum: [
      'USER_ROLE',
      'ADMIN_ROLE',
      'TEACHER_ROLE',
      'STUDENT_ROLE',
      'ASSISTANT_ROLE',
    ],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: String,
    default: 'https://www.gravatar.com/avatar/',
  },
});

export const UserModel = mongoose.model('User', userSchema);
