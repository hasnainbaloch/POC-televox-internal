import { useState } from 'react'
import { Form, Input, Button, Checkbox, Typography, message } from 'antd'
import TeleVoxLogo from '../components/TeleVoxLogo'
import MicrosoftIcon from '../components/MicrosoftIcon'
import backgroundPattern from '../assets/background-pattern.svg'
import './Login.scss'

const { Title, Text } = Typography

const Login = () => {
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      console.log('Login values:', values)
      message.success('Login successful!')
      // Handle login logic here
    } catch (error) {
      console.error('Login error:', error)
      message.error('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleMicrosoftLogin = () => {
    console.log('Microsoft login clicked')
    // Handle Microsoft login logic here
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-section">
          <TeleVoxLogo width={134} height={36} variant="white" />
        </div>
        <div className="brand-content">
          <h1 className="brand-title">Housecalls Pro</h1>
          <p className="brand-subtitle">
            Modernize your digital patient outreach and drive communications from your EHR
          </p>
        </div>
        <div className="background-graphic">
          <img 
            src={backgroundPattern} 
            alt="Background pattern"
            className="background-image"
          />
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h2 className="login-title">Login to your account</h2>
              <p className="login-subtitle">Please enter credentials to access your account</p>
            </div>

            <Form
              name="login"
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
              className="login-form"
            >
              <Form.Item
                name="username"
                className="form-field"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <div className="field-wrapper">
                  <label className="field-label">Username</label>
                  <Input 
                    placeholder="Enter Name"
                    className="field-input"
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                className="form-field"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <div className="field-wrapper">
                  <label className="field-label">Password</label>
                  <Input.Password
                    placeholder="Enter Password"
                    className="field-input"
                  />
                </div>
              </Form.Item>

              <div className="form-options">
                <div className="remember-section">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="remember-checkbox">
                      <span className="remember-text">Remember me</span>
                    </Checkbox>
                  </Form.Item>
                </div>
                <div className="forgot-section">
                  <a className="forgot-link" href="#forgot">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="form-actions">
                <Form.Item className="login-button-wrapper">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="login-button"
                    block
                  >
                    Login
                  </Button>
                </Form.Item>

                <div className="divider-section">
                  <div className="divider-line"></div>
                  <div className="divider-text-wrapper">
                    <span className="divider-text">OR</span>
                  </div>
                </div>

                <Form.Item className="microsoft-button-wrapper">
                  <Button
                    onClick={handleMicrosoftLogin}
                    className="microsoft-button"
                    block
                  >
                    <MicrosoftIcon className="microsoft-icon" />
                    <span className="microsoft-text">Login with Microsoft</span>
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login