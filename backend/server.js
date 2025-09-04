const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config({ path: './config/config.env' });

// 导入路由
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const learningPathRoutes = require('./routes/learningPaths');
const taskRoutes = require('./routes/tasks');
const communityRoutes = require('./routes/community');

// 初始化Express应用
const app = express();

// 中间件
app.use(express.json());
app.use(cors());

// 日志
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 挂载路由
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/learning-paths', learningPathRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/community', communityRoutes);

// 根路由
app.get('/', (req, res) => {
  res.send('新手开发陪跑器 API 运行中');
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || '服务器错误'
  });
});

// 连接数据库
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB 连接成功'))
.catch(err => console.error('MongoDB 连接失败:', err));

// 设置端口并启动服务器
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`服务器在 ${process.env.NODE_ENV} 模式下运行，端口: ${PORT}`);
});

// 处理未捕获的异常
process.on('unhandledRejection', (err) => {
  console.error('未捕获的异常:', err.message);
  server.close(() => process.exit(1));
});