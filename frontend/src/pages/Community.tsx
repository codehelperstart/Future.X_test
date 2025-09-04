import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`community-tabpanel-${index}`}
      aria-labelledby={`community-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `community-tab-${index}`,
    'aria-controls': `community-tabpanel-${index}`,
  };
}

const Community = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // 模拟数据
  const posts = [
    {
      id: 1,
      author: '张三',
      avatar: '/static/avatars/avatar1.jpg',
      time: '2小时前',
      content: '刚刚完成了我的第一个HTML页面，感觉太棒了！',
      likes: 15,
      comments: 3,
      tags: ['HTML', '初学者'],
    },
    {
      id: 2,
      author: '李四',
      avatar: '/static/avatars/avatar2.jpg',
      time: '昨天',
      content: '有人能帮我解释一下CSS的Flexbox布局吗？我有点困惑...',
      likes: 8,
      comments: 12,
      tags: ['CSS', '问题求助'],
    },
    {
      id: 3,
      author: '王五',
      avatar: '/static/avatars/avatar3.jpg',
      time: '3天前',
      content: '分享一个很棒的JavaScript学习资源：https://javascript.info/',
      likes: 32,
      comments: 5,
      tags: ['JavaScript', '资源分享'],
    },
  ];

  const groups = [
    {
      id: 1,
      name: '前端开发学习小组',
      members: 128,
      description: '专注于HTML、CSS和JavaScript的学习和讨论',
    },
    {
      id: 2,
      name: 'React爱好者',
      members: 85,
      description: '分享React开发经验和最佳实践',
    },
    {
      id: 3,
      name: '编程初学者互助会',
      members: 210,
      description: '为编程新手提供帮助和支持',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'HTML/CSS工作坊',
      date: '2023-06-15 19:00',
      participants: 45,
      description: '面向初学者的HTML和CSS基础工作坊',
    },
    {
      id: 2,
      title: 'JavaScript编程挑战',
      date: '2023-06-20 20:00',
      participants: 32,
      description: '一起解决有趣的JavaScript编程问题',
    },
    {
      id: 3,
      title: '代码评审会议',
      date: '2023-06-25 18:30',
      participants: 15,
      description: '分享你的代码并获得专业反馈',
    },
  ];

  return (
    <Box className="page-container">
      <Typography variant="h4" gutterBottom>
        开发者社区
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* 发帖区域 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar sx={{ mr: 2 }} />
                <TextField
                  fullWidth
                  placeholder="分享你的学习经验或提问..."
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button variant="contained" color="primary">
                  发布
                </Button>
              </Box>
            </CardContent>
          </Card>
          
          {/* 社区内容标签页 */}
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="community tabs">
                <Tab label="最新动态" {...a11yProps(0)} />
                <Tab label="热门讨论" {...a11yProps(1)} />
                <Tab label="我的关注" {...a11yProps(2)} />
              </Tabs>
            </Box>
            
            <TabPanel value={value} index={0}>
              {posts.map((post) => (
                <Card key={post.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={post.avatar} sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle1">
                          {post.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.time}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body1" paragraph>
                      {post.content}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      {post.tags.map((tag) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small" 
                          sx={{ mr: 1 }} 
                        />
                      ))}
                    </Box>
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button startIcon={<FavoriteIcon />} size="small">
                        {post.likes}
                      </Button>
                      <Button startIcon={<CommentIcon />} size="small">
                        {post.comments}
                      </Button>
                      <Button startIcon={<ShareIcon />} size="small">
                        分享
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </TabPanel>
            
            <TabPanel value={value} index={1}>
              <Typography variant="body1">
                热门讨论内容将在这里显示
              </Typography>
            </TabPanel>
            
            <TabPanel value={value} index={2}>
              <Typography variant="body1">
                你关注的内容将在这里显示
              </Typography>
            </TabPanel>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          {/* 搜索框 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <TextField
                fullWidth
                placeholder="搜索社区内容..."
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </CardContent>
          </Card>
          
          {/* 社区小组 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                推荐小组
              </Typography>
              <List>
                {groups.map((group) => (
                  <React.Fragment key={group.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={group.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {group.members}名成员
                            </Typography>
                            {` — ${group.description}`}
                          </React.Fragment>
                        }
                      />
                      <Button variant="outlined" size="small">
                        加入
                      </Button>
                    </ListItem>
                    {group.id !== groups.length && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
              <Button fullWidth sx={{ mt: 1 }}>
                查看更多
              </Button>
            </CardContent>
          </Card>
          
          {/* 社区活动 */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                即将举行的活动
              </Typography>
              <List>
                {events.map((event) => (
                  <React.Fragment key={event.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={event.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {event.date}
                            </Typography>
                            <br />
                            {`${event.participants}人参与 — ${event.description}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {event.id !== events.length && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
              <Button fullWidth sx={{ mt: 1 }}>
                查看更多
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Community;