const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, '请提供姓'],
    trim: true,
    maxlength: [50, '姓不能超过50个字符']
  },
  lastName: {
    type: String,
    required: [true, '请提供名'],
    trim: true,
    maxlength: [50, '名不能超过50个字符']
  },
  email: {
    type: String,
    required: [true, '请提供邮箱'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      '请提供有效的邮箱'
    ]
  },
  password: {
    type: String,
    required: [true, '请提供密码'],
    minlength: [6, '密码至少6个字符'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'admin'],
    default: 'user'
  },
  bio: {
    type: String,
    maxlength: [500, '个人简介不能超过500个字符']
  },
  avatar: {
    type: String,
    default: 'default-avatar.jpg'
  },
  skills: [{
    type: String
  }],
  learning: [{
    type: String
  }],
  stats: {
    completedTasks: {
      type: Number,
      default: 0
    },
    totalTasks: {
      type: Number,
      default: 0
    },
    streak: {
      type: Number,
      default: 0
    },
    lastActive: {
      type: Date,
      default: Date.now
    }
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 加密密码
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// 签署JWT令牌
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// 匹配用户输入的密码
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);