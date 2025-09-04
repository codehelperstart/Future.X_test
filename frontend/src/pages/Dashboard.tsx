import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const Dashboard = () => {
  // 模拟数据
  const learningProgress = 35; // 百分比
  const nextTasks = [
    { id: 1, title: '完成HTML基础练习', deadline: '今天' },
    { id: 2, title: '学习CSS选择器', deadline: '明天' },
    { id: 3, title: '完成JavaScript变量练习', deadline: '后天' },
  ];
  
  const recentActivities = [
    { id: 1, content: '完成了HTML表单练习', time: '2小时前' },
    { id: 2, content: '加入了前端开发社群', time: '昨天' },
    { id: 3, content: '获得了"HTML高手"徽章', time: '3天前' },
  ];

  return (
    <Box className="page-container">
      <Typography variant="h4" gutterBottom>
        欢迎回来，开发者！
      </Typography>
      
      <Grid container spacing={3}>
        {/* 学习进度卡片 */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" className="section-title">
                学习进度
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={learningProgress} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {`${learningProgress}%`}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                你正在学习前端开发基础阶段
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
              >
                继续学习
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        {/* 待完成任务卡片 */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" className="section-title">
                待完成任务
              </Typography>
              <List>
                {nextTasks.map((task) => (
                  <React.Fragment key={task.id}>
                    <ListItem>
                      <ListItemText 
                        primary={task.title} 
                        secondary={`截止: ${task.deadline}`} 
                      />
                      <Button variant="outlined" size="small">
                        开始
                      </Button>
                    </ListItem>
                    {task.id !== nextTasks.length && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        {/* 最近活动卡片 */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" className="section-title">
                最近活动
              </Typography>
              <List>
                {recentActivities.map((activity) => (
                  <React.Fragment key={activity.id}>
                    <ListItem>
                      <ListItemText 
                        primary={activity.content} 
                        secondary={activity.time} 
                      />
                    </ListItem>
                    {activity.id !== recentActivities.length && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        {/* 推荐资源卡片 */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" className="section-title">
                推荐资源
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        HTML完全指南
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        适合初学者的HTML基础教程
                      </Typography>
                      <Button size="small" sx={{ mt: 1 }}>
                        查看
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        CSS布局技巧
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        掌握CSS布局的核心概念
                      </Typography>
                      <Button size="small" sx={{ mt: 1 }}>
                        查看
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        JavaScript入门
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        从零开始学习JavaScript
                      </Typography>
                      <Button size="small" sx={{ mt: 1 }}>
                        查看
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;