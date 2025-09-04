const express = require('express');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

// 学习路径控制器将在后续实现
// 这里先定义基本路由结构

// 获取所有学习路径
router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: '获取所有学习路径' });
});

// 获取单个学习路径
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `获取学习路径ID: ${req.params.id}` });
});

// 创建学习路径 - 需要认证
router.post('/', protect, authorize('admin', 'mentor'), (req, res) => {
  res.status(201).json({ success: true, message: '创建新学习路径' });
});

// 更新学习路径 - 需要认证
router.put('/:id', protect, authorize('admin', 'mentor'), (req, res) => {
  res.status(200).json({ success: true, message: `更新学习路径ID: ${req.params.id}` });
});

// 删除学习路径 - 仅管理员
router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `删除学习路径ID: ${req.params.id}` });
});

// 用户加入学习路径
router.post('/:id/enroll', protect, (req, res) => {
  res.status(200).json({ success: true, message: `加入学习路径ID: ${req.params.id}` });
});

// 获取用户的学习路径进度
router.get('/user/progress', protect, (req, res) => {
  res.status(200).json({ success: true, message: '获取用户学习路径进度' });
});

module.exports = router;