import React from 'react'
import { Layout, Menu, Dropdown, Badge, Avatar } from 'antd'
import { 
  MenuOutlined, 
  QuestionCircleOutlined, 
  DownOutlined 
} from '@ant-design/icons'
import TeleVoxLogo from './TeleVoxLogo'
import { NotificationIcon } from './WorkflowIcons'
import './Navigation.scss'

const { Header } = Layout

const Navigation = ({ onToggleSidebar }) => {
  // User dropdown menu
  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        Profile
      </Menu.Item>
      <Menu.Item key="settings">
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className="navigation-header">
      <div className="navigation-container">
        {/* Left side - Menu and Logo */}
        <div className="navigation-left">
          <button className="menu-button" onClick={onToggleSidebar}>
            <MenuOutlined />
          </button>
          <div className="logo-container">
            <TeleVoxLogo width={121.375} height={32} variant="default" />
          </div>
        </div>

        {/* Right side - Notifications, Help, User */}
        <div className="navigation-right">
          {/* Notifications */}
          <div className="nav-item notifications">
            <Badge dot>
              <NotificationIcon />
            </Badge>
          </div>

          {/* Divider */}
          <div className="nav-divider"></div>

          {/* Help & Support */}
          <div className="nav-item help-support">
            <QuestionCircleOutlined className="nav-icon" />
            <span className="nav-text">Help & Support</span>
          </div>

          {/* Divider */}
          <div className="nav-divider"></div>

          {/* User Avatar with Dropdown */}
          <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
            <div className="nav-item user-dropdown">
              <Avatar 
                size={32} 
                style={{ 
                  backgroundColor: '#212d31',
                  color: '#ffffff',
                  fontFamily: 'Roboto',
                  fontWeight: 500,
                  fontSize: '16px'
                }}
              >
                A
              </Avatar>
              <DownOutlined className="dropdown-icon" />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default Navigation 