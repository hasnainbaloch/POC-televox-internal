import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  UserOutlined, 
  TeamOutlined, 
  DollarOutlined, 
  SafetyOutlined,
  BarChartOutlined,
  MedicineBoxOutlined,
  SettingOutlined,
  MailOutlined,
  FileTextOutlined,
  FormOutlined,
  ToolOutlined,
  UnorderedListOutlined,
  DownOutlined,
  UpOutlined,
  RightOutlined
} from '@ant-design/icons'
import './Sidebar.scss'

const Sidebar = ({ collapsed = false }) => {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState({
    analytics: false,
    accountManagement: false,
    contactCenter: false,
    carePrograms: false,
    workflowConfiguration: false,
    configuration: false,
    ehrConfiguration: false,
    sftpDataTools: false,
    tools: true // Tools section expanded as shown in screenshot
  })

  const [selectedItem, setSelectedItem] = useState('workflow')

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  // Check if current path matches the item
  const isSelected = (path) => {
    return location.pathname === path
  }

  return (
    <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-main">
          {/* Main Navigation Items */}
          <div className="sidebar-section">
            <Link to="/users" className={`sidebar-item ${isSelected('/users') ? 'selected' : ''}`}>
              <TeamOutlined className="sidebar-icon" />
              {!collapsed && <span className="sidebar-label">Users</span>}
            </Link>
            
            <Link to="/billing" className={`sidebar-item ${isSelected('/billing') ? 'selected' : ''}`}>
              <DollarOutlined className="sidebar-icon" />
              {!collapsed && <span className="sidebar-label">Billing</span>}
            </Link>
            
            <Link to="/roles" className={`sidebar-item ${isSelected('/roles') ? 'selected' : ''}`}>
              <SafetyOutlined className="sidebar-icon" />
              {!collapsed && <span className="sidebar-label">Roles</span>}
            </Link>
          </div>

          {/* Analytics Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('analytics')}
            >
              {!collapsed && <span className="sidebar-section-title">ANALYTICS</span>}
              {!collapsed && (expandedSections.analytics ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* Account Management Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('accountManagement')}
            >
              {!collapsed && <span className="sidebar-section-title">ACCOUNT MANAGEMENT</span>}
              {!collapsed && (expandedSections.accountManagement ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* Contact Center Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('contactCenter')}
            >
              {!collapsed && <span className="sidebar-section-title">CONTACT CENTER</span>}
              {!collapsed && (expandedSections.contactCenter ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* Care Programs Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('carePrograms')}
            >
              {!collapsed && <span className="sidebar-section-title">CARE PROGRAMS</span>}
              {!collapsed && (expandedSections.carePrograms ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* Workflow Configuration Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('workflowConfiguration')}
            >
              {!collapsed && <span className="sidebar-section-title">WORKFLOW CONFIGURATION</span>}
              {!collapsed && (expandedSections.workflowConfiguration ? <UpOutlined /> : <DownOutlined />)}
            </div>
            
            {expandedSections.workflowConfiguration && !collapsed && (
              <div className="sidebar-subsection">
                <Link 
                  to="/workflow" 
                  className={`sidebar-item ${isSelected('/workflow') ? 'selected' : ''}`}
                >
                  <SettingOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Workflow</span>
                </Link>
                
                <Link 
                  to="/email" 
                  className={`sidebar-item ${isSelected('/email') ? 'selected' : ''}`}
                >
                  <MailOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Email</span>
                </Link>
                
                <Link 
                  to="/instructions" 
                  className={`sidebar-item ${isSelected('/instructions') ? 'selected' : ''}`}
                >
                  <FileTextOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Instructions</span>
                </Link>
                
                <Link 
                  to="/surveys" 
                  className={`sidebar-item ${isSelected('/surveys') ? 'selected' : ''}`}
                >
                  <FormOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Surveys</span>
                </Link>
              </div>
            )}
          </div>

          {/* Configuration Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('configuration')}
            >
              {!collapsed && <span className="sidebar-section-title">CONFIGURATION</span>}
              {!collapsed && (expandedSections.configuration ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* EHR Configuration Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('ehrConfiguration')}
            >
              {!collapsed && <span className="sidebar-section-title">EHR CONFIGURATION</span>}
              {!collapsed && (expandedSections.ehrConfiguration ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* SFTP Data Tools Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('sftpDataTools')}
            >
              {!collapsed && <span className="sidebar-section-title">SFTP DATA TOOLS</span>}
              {!collapsed && (expandedSections.sftpDataTools ? <UpOutlined /> : <DownOutlined />)}
            </div>
          </div>

          {/* Tools Section */}
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => !collapsed && toggleSection('tools')}
            >
              {!collapsed && <span className="sidebar-section-title">TOOLS</span>}
              {!collapsed && (expandedSections.tools ? <UpOutlined /> : <DownOutlined />)}
            </div>
            
            {expandedSections.tools && !collapsed && (
              <div className="sidebar-subsection">
                <Link 
                  to="/api-logs" 
                  className={`sidebar-item ${isSelected('/api-logs') ? 'selected' : ''}`}
                >
                  <FileTextOutlined className="sidebar-icon" />
                  <span className="sidebar-label">API Logs</span>
                </Link>
                
                <Link 
                  to="/billing-management" 
                  className={`sidebar-item ${isSelected('/billing-management') ? 'selected' : ''}`}
                >
                  <DollarOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Billing Management</span>
                </Link>
                
                <Link 
                  to="/contact-logs" 
                  className={`sidebar-item ${isSelected('/contact-logs') ? 'selected' : ''}`}
                >
                  <UnorderedListOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Contact Logs</span>
                </Link>
                
                <Link 
                  to="/future-outreach" 
                  className={`sidebar-item ${isSelected('/future-outreach') ? 'selected' : ''}`}
                >
                  <MailOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Future Outreach</span>
                </Link>
                
                <Link 
                  to="/holiday-rules" 
                  className={`sidebar-item ${isSelected('/holiday-rules') ? 'selected' : ''}`}
                >
                  <SettingOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Holiday Rules</span>
                </Link>
                
                <Link 
                  to="/migrate-account" 
                  className={`sidebar-item ${isSelected('/migrate-account') ? 'selected' : ''}`}
                >
                  <UserOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Migrate Account</span>
                </Link>
                
                <Link 
                  to="/ondemand" 
                  className={`sidebar-item ${isSelected('/ondemand') ? 'selected' : ''}`}
                >
                  <ToolOutlined className="sidebar-icon" />
                  <span className="sidebar-label">OnDemand</span>
                </Link>
                
                <Link 
                  to="/opt-out-management" 
                  className={`sidebar-item ${isSelected('/opt-out-management') ? 'selected' : ''}`}
                >
                  <SafetyOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Opt-Out Management</span>
                </Link>
                
                <Link 
                  to="/phone-scrubbing" 
                  className={`sidebar-item ${isSelected('/phone-scrubbing') ? 'selected' : ''}`}
                >
                  <FormOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Phone Scrubbing</span>
                </Link>
                
                <Link 
                  to="/patient-feedback" 
                  className={`sidebar-item ${isSelected('/patient-feedback') ? 'selected' : ''}`}
                >
                  <MedicineBoxOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Patient Feedback</span>
                </Link>
                
                <Link 
                  to="/patient-search" 
                  className={`sidebar-item ${isSelected('/patient-search') ? 'selected' : ''}`}
                >
                  <UserOutlined className="sidebar-icon" />
                  <span className="sidebar-label">Patient Search</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Changelog at bottom */}
        <div className="sidebar-footer">
          <Link 
            to="/changelog" 
            className={`sidebar-item ${isSelected('/changelog') ? 'selected' : ''}`}
          >
            <UnorderedListOutlined className="sidebar-icon" />
            <span className="sidebar-label">Changelog</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 