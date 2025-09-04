import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  LinearProgress,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

const Profile = () => {
  // 模拟用户数据
  const user = {
    name: '张三',
    email: 'zhangsan@example.com',
    avatar: '/static/avatars/avatar1.jpg',
    bio: '热爱编程的前端开发初学者，正在学习React和TypeScript。',
    joinDate: '2023年5月',
    skills: ['HTML', 'CSS', 'JavaScript基础'],
    learning: ['React', 'TypeScript', '响应式设计'],
    achievements: [
      { name: 'HTML高手', description: '完成所有HTML相关任务', date: '2023-05-15' },
      { name: '社区活跃者', description: '在社区发布10篇帖子', date: '2023-05-20' },
      { name: '学习达人', description: '连续学习7天', date: '2023-05-25' },
    ],
    stats: {
      completedTasks: 15,
      totalTasks: 42,
      streak: 5,
      posts: 12,
      followers: 8,
      following: 15,
    },
  };

  // 计算完成任务的百分比
  const completionPercentage = Math.round((user.stats.completedTasks / user.stats.totalTasks) * 100);

  return (
    <Box className="page-container">
      <Grid container spacing={3}>
        {/* 个人信息卡片 */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                src={user.avatar}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {user.bio}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                加入时间：{user.joinDate}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                sx={{ mt: 2 }}
              >
                编辑资料
              </Button>
            </CardContent>
          </Card>
          
          {/* 技能卡片 */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                我的技能
              </Typography>
              <Box sx={{ mb: 2 }}>
                {user.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
              
              <Typography variant="h6" gutterBottom>
                正在学习
              </Typography>
              <Box>
                {user.learning.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* 学习统计和成就 */}
        <Grid item xs={12} md={8}>
          {/* 学习统计卡片 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                学习统计
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">{user.stats.completedTasks}</Typography>
                    <Typography variant="body2" color="text.secondary">已完成任务</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">{user.stats.streak}</Typography>
                    <Typography variant="body2" color="text.secondary">连续学习天数</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">{user.stats.posts}</Typography>
                    <Typography variant="body2" color="text.secondary">社区贡献</Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Typography variant="body2" gutterBottom>
                总体学习进度
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={completionPercentage} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {`${completionPercentage}%`}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          
          {/* 成就卡片 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                我的成就
              </Typography>
              <List>
                {user.achievements.map((achievement, index) => (
                  <React.Fragment key={achievement.name}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={achievement.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {achievement.description}
                            </Typography>
                            {` — 获得于 ${achievement.date}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {index < user.achievements.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
          
          {/* 账户设置卡片 */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                账户设置
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="电子邮箱"
                    defaultValue={user.email}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="密码"
                    type="password"
                    defaultValue="********"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="个人简介"
                    multiline
                    rows={3}
                    defaultValue={user.bio}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary">
                      保存更改
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;