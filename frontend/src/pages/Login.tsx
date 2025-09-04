import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          新手开发陪跑器
        </Typography>
        
        <Card sx={{ width: '100%', mt: 3 }}>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              登录
            </Typography>
            
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="邮箱地址"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="密码"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                登录
              </Button>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link component="button" variant="body2">
                  忘记密码？
                </Link>
                <Link component={RouterLink} to="/register" variant="body2">
                  没有账号？注册
                </Link>
              </Box>
            </Box>
            
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                或者
              </Typography>
            </Divider>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
              >
                GitHub登录
              </Button>
              <Button
                fullWidth
                variant="outlined"
              >
                Google登录
              </Button>
            </Box>
          </CardContent>
        </Card>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          登录即表示您同意我们的
          <Link component="button" variant="body2" sx={{ mx: 0.5 }}>
            服务条款
          </Link>
          和
          <Link component="button" variant="body2" sx={{ mx: 0.5 }}>
            隐私政策
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;