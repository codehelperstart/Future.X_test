import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Assignment as AssignmentIcon,
  Code as CodeIcon,
  VideoLibrary as VideoIcon,
  Quiz as QuizIcon,
} from '@mui/icons-material';

const LearningPath = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // 模拟学习路径数据
  const learningSteps = [
    {
      label: 'HTML基础',
      description: '学习HTML的基本结构和常用标签',
      completed: true,
      tasks: [
        { type: 'video', title: 'HTML简介', completed: true },
        { type: 'code', title: '创建第一个HTML页面', completed: true },
        { type: 'quiz', title: 'HTML标签测验', completed: true },
      ],
    },
    {
      label: 'CSS基础',
      description: '学习CSS选择器和基本样式属性',
      completed: false,
      tasks: [
        { type: 'video', title: 'CSS简介', completed: true },
        { type: 'code', title: '为HTML添加样式', completed: false },
        { type: 'assignment', title: '创建个人简历页面', completed: false },
        { type: 'quiz', title: 'CSS选择器测验', completed: false },
      ],
    },
    {
      label: 'JavaScript基础',
      description: '学习JavaScript的基本语法和DOM操作',
      completed: false,
      tasks: [
        { type: 'video', title: 'JavaScript简介', completed: false },
        { type: 'code', title: '变量和数据类型', completed: false },
        { type: 'code', title: '函数和事件', completed: false },
        { type: 'assignment', title: '创建交互式表单', completed: false },
      ],
    },
    {
      label: '响应式网页设计',
      description: '学习如何创建适应不同设备的网页',
      completed: false,
      tasks: [
        { type: 'video', title: '响应式设计原理', completed: false },
        { type: 'code', title: '媒体查询', completed: false },
        { type: 'assignment', title: '创建响应式网站', completed: false },
      ],
    },
  ];

  // 任务类型图标映射
  const taskTypeIcons = {
    video: <VideoIcon />,
    code: <CodeIcon />,
    assignment: <AssignmentIcon />,
    quiz: <QuizIcon />,
  };

  return (
    <Box className="page-container">
      <Typography variant="h4" gutterBottom>
        学习路径
      </Typography>
      
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            前端开发基础路径
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            这条学习路径将帮助你从零开始学习前端开发的基础知识，包括HTML、CSS和JavaScript。
            完成这条路径后，你将能够创建基本的响应式网页。
          </Typography>
          <Chip label="初级" color="primary" size="small" />
          <Chip label="前端开发" sx={{ ml: 1 }} size="small" />
          <Chip label="约4周" sx={{ ml: 1 }} size="small" />
        </CardContent>
      </Card>
      
      <Stepper activeStep={activeStep} orientation="vertical">
        {learningSteps.map((step, index) => (
          <Step key={step.label} completed={step.completed}>
            <StepLabel>
              <Typography variant="subtitle1">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" color="text.secondary" paragraph>
                {step.description}
              </Typography>
              
              <List>
                {step.tasks.map((task, taskIndex) => (
                  <React.Fragment key={taskIndex}>
                    <ListItem>
                      <ListItemIcon>
                        {taskTypeIcons[task.type as keyof typeof taskTypeIcons]}
                      </ListItemIcon>
                      <ListItemText primary={task.title} />
                      {task.completed ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <Button size="small" variant="outlined">
                          开始
                        </Button>
                      )}
                    </ListItem>
                    {taskIndex < step.tasks.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
              
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={index === learningSteps.length - 1}
                  >
                    {index === learningSteps.length - 1 ? '完成' : '下一步'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    上一步
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
      {activeStep === learningSteps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>恭喜！你已完成所有学习步骤</Typography>
          <Button onClick={() => setActiveStep(0)} sx={{ mt: 1, mr: 1 }}>
            重新开始
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default LearningPath;