import React, { useState } from 'react'
import { Layout } from 'antd'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import './MainLayout.scss'

const { Content } = Layout

const MainLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <Layout className="main-layout">
      {/* Full Width Navigation Header */}
      <Navigation onToggleSidebar={toggleSidebar} />
      
      <div className="layout-body">
        {/* Custom Sidebar */}
        <Sidebar collapsed={sidebarCollapsed} />
        
        <div className={`main-content-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <Layout className="content-layout">
            <Content className="main-content">
              <div className="content-wrapper">
                {children}
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </Layout>
  )
}

export default MainLayout 