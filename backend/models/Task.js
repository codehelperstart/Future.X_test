const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '请提供任务标题'],
    trim: true,
    maxlength: [100, '标题不能超过100个字符']
  },
  description: {
    type: String,
    required: [true, '请提供任务描述'],
    maxlength: [1000, '描述不能超过1000个字符']
  },
  type: {
    type: String,
    required: [true, '请提供任务类型'],
    enum: ['video', 'code', 'assignment', 'quiz', 'reading']
  },
  content: {
    type: String,
    required: [true, '请提供任务内容']
  },
  resources: [{
    title: String,
    url: String,
    type: {
      type: String,
      enum: ['article', 'video', 'documentation', 'example', 'other']
    }
  }],
  estimatedTime: {
    type: Number, // 以分钟为单位
    required: [true, '请提供预计完成时间']
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);