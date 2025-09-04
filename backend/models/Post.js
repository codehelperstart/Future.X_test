const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, '请提供帖子内容'],
    maxlength: [2000, '帖子内容不能超过2000个字符']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type: String
  }],
  likes: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    text: {
      type: String,
      required: true,
      maxlength: [500, '评论不能超过500个字符']
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);