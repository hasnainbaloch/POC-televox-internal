import React from 'react'
import { Card, Row, Col, Statistic, Typography, Button } from 'antd'
import { 
  UserOutlined, 
  MessageOutlined, 
  ClockCircleOutlined,
  RiseOutlined 
} from '@ant-design/icons'
import './Dashboard.scss'

const { Title, Paragraph } = Typography

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Patients',
      value: 1284,
      icon: <UserOutlined />,
      color: '#1890ff'
    },
    {
      title: 'Messages Sent',
      value: 3542,
      icon: <MessageOutlined />,
      color: '#52c41a'
    },
    {
      title: 'Pending Tasks',
      value: 12,
      icon: <ClockCircleOutlined />,
      color: '#faad14'
    },
    {
      title: 'Response Rate',
      value: 98.5,
      suffix: '%',
      icon: <RiseOutlined />,
      color: '#13c2c2'
    }
  ]

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Title level={2}>Dashboard</Title>
        <Paragraph>
          Welcome back! Here's an overview of your TeleVox communication platform.
        </Paragraph>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[24, 24]} className="stats-row">
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card className="stat-card">
              <div className="stat-content">
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.suffix}
                    valueStyle={{ color: stat.color }}
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Main Content Cards */}
      <Row gutter={[24, 24]} className="content-row">
        <Col xs={24} lg={16}>
          <Card title="Recent Activity" className="activity-card">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <MessageOutlined />
                </div>
                <div className="activity-content">
                  <div className="activity-title">Message sent to patient group</div>
                  <div className="activity-time">2 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <UserOutlined />
                </div>
                <div className="activity-content">
                  <div className="activity-title">New patient registered</div>
                  <div className="activity-time">4 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <ClockCircleOutlined />
                </div>
                <div className="activity-content">
                  <div className="activity-title">Appointment reminder scheduled</div>
                  <div className="activity-time">6 hours ago</div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card title="Quick Actions" className="actions-card">
            <div className="action-buttons">
              <Button type="primary" block className="action-button">
                Send New Message
              </Button>
              <Button block className="action-button">
                Schedule Appointment
              </Button>
              <Button block className="action-button">
                View Reports
              </Button>
              <Button block className="action-button">
                Manage Patients
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard 