const mongoose = require('mongoose');

const LearningPathSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '请提供学习路径标题'],
    trim: true,
    maxlength: [100, '标题不能超过100个字符']
  },
  description: {
    type: String,
    required: [true, '请提供学习路径描述'],
    maxlength: [1000, '描述不能超过1000个字符']
  },
  level: {
    type: String,
    required: [true, '请提供难度级别'],
    enum: ['初级', '中级', '高级']
  },
  category: {
    type: String,
    required: [true, '请提供类别'],
    enum: ['前端开发', '后端开发', '移动开发', '全栈开发', '数据科学', '其他']
  },
  estimatedTime: {
    type: String,
    required: [true, '请提供预计完成时间']
  },
  tags: [{
    type: String
  }],
  steps: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    tasks: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Task'
    }]
  }],
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

module.exports = mongoose.model('LearningPath', LearningPathSchema);