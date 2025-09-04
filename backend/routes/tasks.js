const express = require('express');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

// 任务控制器将在后续实现
// 这里先定义基本路由结构

// 获取所有任务
router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: '获取所有任务' });
});

// 获取单个任务
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `获取任务ID: ${req.params.id}` });
});

// 创建任务 - 需要认证
router.post('/', protect, authorize('admin', 'mentor'), (req, res) => {
  res.status(201).json({ success: true, message: '创建新任务' });
});

// 更新任务 - 需要认证
router.put('/:id', protect, authorize('admin', 'mentor'), (req, res) => {
  res.status(200).json({ success: true, message: `更新任务ID: ${req.params.id}` });
});

// 删除任务 - 仅管理员
router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `删除任务ID: ${req.params.id}` });
});

// 用户完成任务
router.post('/:id/complete', protect, (req, res) => {
  res.status(200).json({ success: true, message: `完成任务ID: ${req.params.id}` });
});

// 获取用户的任务进度
router.get('/user/progress', protect, (req, res) => {
  res.status(200).json({ success: true, message: '获取用户任务进度' });
});

module.exports = router;