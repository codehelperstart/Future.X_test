const express = require('express');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

// 用户控制器将在后续实现
// 这里先定义基本路由结构

// 获取所有用户 - 仅管理员
router.get('/', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: '获取所有用户' });
});

// 获取单个用户
router.get('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `获取用户ID: ${req.params.id}` });
});

// 更新用户信息
router.put('/:id', protect, (req, res) => {
  res.status(200).json({ success: true, message: `更新用户ID: ${req.params.id}` });
});

// 删除用户 - 仅管理员
router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ success: true, message: `删除用户ID: ${req.params.id}` });
});

module.exports = router;