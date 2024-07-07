import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Nombre es requerido'],
  },
  lastName: {
    type: String,
    required: [true, 'Apellido es requerido'],
  },
  email: {
    type: String,
    required: [true, 'Correo es requerido'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Contraseña es requerida'],
  },
  phone: {
    type: String,
    required: [true, 'Teléfono es requerido'],
  },
  birthdate: {
    type: Date,
    required: [true, 'Fecha de nacimiento es requerida'],
  },
  country: {
    type: String,
    required: [true, 'País es requerido'],
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
  lastConnection: {
    type: Date,
    default: new Date(),
  },
},
{
  timestamps: true,
});

export const UserModel = mongoose.model('User', userSchema);
