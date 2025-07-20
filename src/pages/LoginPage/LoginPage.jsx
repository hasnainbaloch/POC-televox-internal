import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Checkbox } from '../../components/UI';
import LoginLayout from '../../components/LoginLayout';
import { LoginWithMicrosoft } from '../../images/svg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just redirect to workflow
      navigate('/workflow');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginLayout>
      <div className="login-layout__form-header">
        <h2 className="login-layout__form-title">Login to your account</h2>
        <p className="login-layout__form-description">
          Please enter credentials to access your account
        </p>
      </div>

      <form className="login-layout__form" onSubmit={handleSubmit}>
        <div className="login-layout__field">
          <Input
            type="text"
            label="Username"
            placeholder="Enter Name"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>

        <div className="login-layout__field">
          <Input
            type="password"
            label="Password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            required
          />
        </div>

        <div className="login-layout__form-options">
          <div className="login-layout__checkbox-container">
            <Checkbox
              label="Remember me"
              checked={formData.rememberMe}
              onChange={(checked) => handleInputChange('rememberMe', checked)}
            />
          </div>
          <button
            type="button"
            className="login-layout__forgot-password"
            onClick={() => {
              // TODO: Implement forgot password functionality
            }}
          >
            Forgot Password?
          </button>
        </div>

        <div className="login-layout__actions">
          <Button
            type="submit"
            variant="primary"
            size="large"
            loading={loading}
            block
          >
            Login
          </Button>

          <div className="login-layout__divider">
            <span className="login-layout__divider-text">OR</span>
          </div>

          <button
            type="button"
            className="login-layout__microsoft-login"
            onClick={() => {
              // TODO: Implement Microsoft OAuth login
            }}
          >
            <LoginWithMicrosoft />
          </button>
        </div>
      </form>
    </LoginLayout>
  );
};

export default LoginPage; 