const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    role: {
      type: String,
      enum: ['CUSTOMER', 'TECHNICIAN', 'ADMIN'],
      default: 'CUSTOMER',
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'PENDING'],
      default: 'PENDING',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);



const User = mongoose.model('User', userSchema);

module.exports = User;
