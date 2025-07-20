import {
  ActiveStatusIcon,
  InactiveStatusIcon,
  MoreOptionsIcon,
  DialogIcon,
  SeparatorsIcon,
  SearchIcon,
  DropdownIcon,
  ArrowLeftIcon,
  RightArrowIcon,
  EditIcon,
  DeleteIcon,
  UploadIcon,
  ConditionalSeparatorDrawer
} from '../components'
import React, { useState } from 'react'
import { Table, Button, Breadcrumb, Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Workflow.scss'

const Workflow = () => {
  const [activeTab, setActiveTab] = useState('dialogs')
  const [expandedRows, setExpandedRows] = useState({})
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const navigate = useNavigate()

  // Table data for Dialogs tab
  const dialogsData = [
    {
      key: '1',
      dialogTitle: 'Dialog_001',
      days: 0,
      type: 'Single Patient Single Appointments',
      language: 'Sanjeev Sharma',
      mainSubAccount: 'Main',
      status: 'inactive', // Gray status
    },
    {
      key: '2', 
      dialogTitle: 'Dialog_002',
      days: 0,
      type: 'Single Patient Single Appointments',
      language: 'Sanjeev Sharma', 
      mainSubAccount: 'Main',
      status: 'active', // Green status
    },
    {
      key: '3',
      dialogTitle: 'Dialog_003', 
      days: 0,
      type: 'Multiple Patients Multiple Appointments',
      language: 'Sanjeev Sharma',
      mainSubAccount: 'Main',
      status: 'active', // Green status
    },
    {
      key: '4',
      dialogTitle: 'Dialog_004',
      days: 0, 
      type: 'Single Patient Multiple Appointments',
      language: 'Sanjeev Sharma',
      mainSubAccount: 'Main',
      status: 'active', // Green status
    },
    {
      key: '5',
      dialogTitle: 'Dialog_005',
      days: 0,
      type: 'Multiple Patients Multiple Appointments', 
      language: 'Sanjeev Sharma',
      mainSubAccount: 'Main',
      status: 'inactive', // Gray status
    },
    {
      key: '6',
      dialogTitle: 'Dialog_006',
      days: 0,
      type: 'Single Patient Multiple Appointments',
      language: 'Sanjeev Sharma',
      mainSubAccount: 'Main',
      status: 'active', // Green status
    },
    {
      key: '7',
      dialogTitle: 'Dialog_007',
      days: 0,
      type: 'Single Patient Multiple Appointments',
      language: 'Sanjeev Sharma',
      mainSubAccount: 'Main',
      status: 'active', // Green status
    },
  ]

  // Table data for Conditional Separators tab
  const separatorsData = [
    {
      key: '1',
      conditionName: 'Condition 001',
      applyAt: ['Trigger 001', '+5'],
      separators: {
        providers: 5,
        departments: 4,
        operator: 'AND'
      },
      dialogs: ['Dialog 004', 'Dialog 005', '+1'],
      expandedData: {
        providersList: ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis'],
        departmentsList: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'],
        additionalConditions: ['Patient Age > 65', 'Insurance: Medicare', 'Appointment Type: Follow-up'],
        totalDialogs: 6,
        dialogsList: ['Dialog 004', 'Dialog 005', 'Dialog 012', 'Dialog 015', 'Dialog 018', 'Dialog 021']
      }
    },
    {
      key: '2',
      conditionName: 'Condition 002', 
      applyAt: 'Workflow',
      separators: {
        providers: 4,
        departments: 3,
        operator: 'AND'
      },
      dialogs: ['Dialog 007', 'Dialog 008', '+9'],
      expandedData: {
        providersList: ['Dr. Anderson', 'Dr. Thompson', 'Dr. Garcia', 'Dr. Martinez'],
        departmentsList: ['Emergency', 'Surgery', 'Radiology'],
        additionalConditions: ['Urgency Level: High', 'Location: Main Campus'],
        totalDialogs: 11,
        dialogsList: ['Dialog 007', 'Dialog 008', 'Dialog 013', 'Dialog 016', 'Dialog 019', 'Dialog 022', 'Dialog 025', 'Dialog 028', 'Dialog 031', 'Dialog 034', 'Dialog 037']
      }
    },
    {
      key: '3',
      conditionName: 'Condition 003',
      applyAt: 'Workflow',
      separators: {
        providers: 2,
        cities: 3,
        operator: 'OR',
        additional: '+3'
      },
      dialogs: ['Dialog 010', 'Dialog 011', '+36'],
      expandedData: {
        providersList: ['Dr. Wilson', 'Dr. Moore'],
        citiesList: ['New York', 'Los Angeles', 'Chicago'],
        additionalSeparators: ['Facilities: 3', 'Specialties: 2', 'Service Lines: 4'],
        totalDialogs: 38,
        dialogsList: ['Dialog 010', 'Dialog 011', 'Dialog 014', 'Dialog 017', 'Dialog 020', 'Dialog 023', 'Dialog 026', 'Dialog 029', 'Dialog 032', 'Dialog 035', 'Dialog 038', 'Dialog 041', 'Dialog 044', 'Dialog 047', 'Dialog 050', 'Dialog 053', 'Dialog 056', 'Dialog 059', 'Dialog 062', 'Dialog 065', 'Dialog 068', 'Dialog 071', 'Dialog 074', 'Dialog 077', 'Dialog 080', 'Dialog 083', 'Dialog 086', 'Dialog 089', 'Dialog 092', 'Dialog 095', 'Dialog 098', 'Dialog 101', 'Dialog 104', 'Dialog 107', 'Dialog 110', 'Dialog 113', 'Dialog 116', 'Dialog 119']
      }
    }
  ]

  // Custom Status Icon Component
  const StatusIconWrapper = ({ status, onClick }) => (
    <div 
      className="status-icon-wrapper"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Status: ${status}`}
    >
      {status === 'active' ? <ActiveStatusIcon /> : <InactiveStatusIcon />}
    </div>
  )

  // Info Tag Component for separators
  const InfoTag = ({ children }) => (
    <div className="info-tag">
      {children}
    </div>
  )

  // Tooltip wrapper component for InfoTag
  const TooltipInfoTag = ({ children, tooltipContent }) => (
    <Tooltip 
      title={tooltipContent}
      placement="top"
      mouseEnterDelay={0}
      mouseLeaveDelay={0}
      trigger="hover"
    >
      <div style={{ display: 'inline-block' }}>
        <InfoTag>{children}</InfoTag>
      </div>
    </Tooltip>
  )

  // Apply At Cell Component
  const ApplyAtCell = ({ data, record }) => {
    const isExpanded = expandedRows[record.key]
    
    if (Array.isArray(data)) {
      return (
        <div className={`apply-at-cell ${isExpanded ? 'expanded' : ''}`}>
          {data.map((item, index) => {
            // Check if this is a "+X" indicator
            if (item.startsWith('+') && record.expandedData?.additionalConditions) {
              return (
                <TooltipInfoTag
                  key={index}
                  tooltipContent={
                    <div>
                      <div className="tooltip-header">Additional Conditions ({item})</div>
                      <div className="tooltip-content">
                        {record.expandedData.additionalConditions.map((condition, conditionIndex) => (
                          <div key={conditionIndex} className="tooltip-item">
                            <div className="tooltip-bullet"></div>
                            <div className="tooltip-text">{condition}</div>
                          </div>
                        ))}
                      </div>
                      <div className="tooltip-count">
                        {record.expandedData.additionalConditions.length} condition{record.expandedData.additionalConditions.length !== 1 ? 's' : ''} total
                      </div>
                    </div>
                  }
                >
                  {item}
                </TooltipInfoTag>
              )
            }
            return <InfoTag key={index}>{item}</InfoTag>
          })}
        </div>
      )
    }
    return <span className="table-cell-text">{data}</span>
  }

  // Toggle expanded row function
  const toggleExpandedRow = (key) => {
    setExpandedRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Separators Cell Component
  const SeparatorsCell = ({ data, record }) => {
    const isExpanded = expandedRows[record.key]
    
    return (
      <div className={`separators-cell ${isExpanded ? 'expanded' : ''}`}>
        {!isExpanded ? (
          // Collapsed view
          <div className="separators-collapsed">
            <div className="separator-group">
              {data.providers && (
                <InfoTag>{data.providers} Providers</InfoTag>
              )}
              {data.providers && data.departments && (
                <span className="operator">{data.operator}</span>
              )}
              {data.departments && (
                <InfoTag>{data.departments} Departments</InfoTag>
              )}
              {(data.departments || data.providers) && data.cities && (
                <span className="operator">{data.operator}</span>
              )}
              {data.cities && (
                <InfoTag>{data.cities} Cities</InfoTag>
              )}
              {data.additional && (
                <InfoTag>{data.additional}</InfoTag>
              )}
            </div>
            <button 
              className="view-more"
              onClick={() => toggleExpandedRow(record.key)}
            >
              View more
            </button>
          </div>
        ) : (
          // Expanded view
          <div className="separators-expanded">
            <div className="expanded-content">
              {/* Providers Section */}
              <div className="expanded-section">
                <div className="section-title">Provider</div>
                <div className="tag-group">
                  {record.expandedData.providersList.map((provider, index) => (
                    <InfoTag key={index}>{provider}</InfoTag>
                  ))}
                </div>
              </div>
              
              {/* Operator Text */}
              {record.expandedData.departmentsList && (
                <div className="operator-text">
                  {data.operator}
                </div>
              )}
              
              {/* Departments Section */}
              {record.expandedData.departmentsList && (
                <div className="expanded-section">
                  <div className="section-title">Department</div>
                  <div className="tag-group">
                    {record.expandedData.departmentsList.map((dept, index) => (
                      <InfoTag key={index}>{dept}</InfoTag>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Cities Section (if exists) */}
              {record.expandedData.citiesList && (
                <>
                  <div className="operator-text">
                    {data.operator}
                  </div>
                  <div className="expanded-section">
                    <div className="section-title">Cities</div>
                    <div className="tag-group">
                      {record.expandedData.citiesList.map((city, index) => (
                        <InfoTag key={index}>{city}</InfoTag>
                      ))}
                    </div>
                  </div>
                </>
              )}
              
              {/* Additional Separators (if exists) */}
              {record.expandedData.additionalSeparators && (
                <div className="expanded-section additional">
                  <div className="section-title">Additional Separators</div>
                  <div className="tag-group">
                    {record.expandedData.additionalSeparators.map((separator, index) => (
                      <InfoTag key={index}>{separator}</InfoTag>
                    ))}
                  </div>
                </div>
              )}
              

            </div>
            
            <div className="expanded-actions">
              <button 
                className="view-less"
                onClick={() => toggleExpandedRow(record.key)}
              >
                View less
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Dialogs Cell Component
  const DialogsCell = ({ data, record }) => {
    const isExpanded = expandedRows[record.key]
    
    return (
      <div className={`dialogs-cell ${isExpanded ? 'expanded' : ''}`}>
        {!isExpanded ? (
          // Collapsed view
          data.map((item, index) => {
            // Check if this is a "+X" indicator
            if (item.startsWith('+')) {
              const additionalDialogs = record.expandedData?.dialogsList?.slice(2) // Skip first 2 shown dialogs
              return (
                <TooltipInfoTag
                  key={index}
                  tooltipContent={
                    <div>
                      <div className="tooltip-header">Additional Dialogs ({item})</div>
                      <div className="tooltip-content">
                        {additionalDialogs?.map((dialog, dialogIndex) => (
                          <div key={dialogIndex} className="tooltip-item">
                            <div className="tooltip-bullet"></div>
                            <div className="tooltip-text">{dialog}</div>
                          </div>
                        )) || <div className="tooltip-item">
                          <div className="tooltip-text">No additional dialogs found</div>
                        </div>}
                      </div>
                      <div className="tooltip-count">
                        {additionalDialogs?.length || 0} dialog{additionalDialogs?.length !== 1 ? 's' : ''} total
                      </div>
                    </div>
                  }
                >
                  {item}
                </TooltipInfoTag>
              )
            }
            return <InfoTag key={index}>{item}</InfoTag>
          })
        ) : (
          // Expanded view
          <div className="dialogs-expanded">
            <div className="expanded-section">
              <div className="section-title">All Dialogs ({record.expandedData.totalDialogs})</div>
              <div className="tag-group">
                {record.expandedData.dialogsList.map((dialog, index) => (
                  <InfoTag key={index}>{dialog}</InfoTag>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Toggle status function
  const toggleStatus = (key) => {
    // You can implement status toggle logic here
    console.log(`Toggle status for item ${key}`)
  }

  // Handle dropdown menu actions
  const handleEdit = (key) => {
    console.log(`Edit item ${key}`)
  }

  const handleDelete = (key) => {
    console.log(`Delete item ${key}`)
  }

  // Drawer handlers
  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const handleDrawerClose = () => {
    setDrawerVisible(false)
  }

  const handleAddCondition = (newCondition) => {
    console.log('Adding new condition:', newCondition)
    // Here you would typically add the new condition to your data
    // For now, we'll just log it
  }

  // Simple action menu without dropdown to avoid React compatibility issues
  const ActionMenu = ({ record }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
      <div className="action-menu-wrapper" style={{ position: 'relative' }}>
        <Tooltip title="More options">
          <Button 
            type="text" 
            className="action-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MoreOptionsIcon />
          </Button>
        </Tooltip>
        {isOpen && (
          <div className="dropdown-menu" style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 1000,
            marginTop: '4px'
          }}>
            <div className="dropdown-item" onClick={() => {
              handleEdit(record.key)
              setIsOpen(false)
            }}>
              <EditIcon />
              <span>Edit</span>
            </div>
            <div className="dropdown-item" onClick={() => {
              handleDelete(record.key)
              setIsOpen(false)
            }}>
              <DeleteIcon />
              <span>Delete</span>
            </div>
          </div>
        )}
        {isOpen && (
          <div 
            className="dropdown-backdrop" 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    )
  }

  // Dialogs table columns
  const dialogsColumns = [
    {
      title: '',
      dataIndex: 'status',
      width: 52,
      render: (status, record) => (
        <StatusIconWrapper 
          status={status} 
          onClick={() => toggleStatus(record.key)}
        />
      ),
    },
    {
      title: 'Dialog Title',
      dataIndex: 'dialogTitle',
      sorter: true,
      render: (text) => (
        <span className="table-cell-text">{text}</span>
      ),
    },
    {
      title: 'Days',
      dataIndex: 'days',
      sorter: true,
      render: (text) => (
        <span className="table-cell-text">{text}</span>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type', 
      sorter: true,
      render: (text) => (
        <span className="table-cell-text">{text}</span>
      ),
    },
    {
      title: 'Language',
      dataIndex: 'language',
      sorter: true, 
      render: (text) => (
        <span className="table-cell-text">{text}</span>
      ),
    },
    {
      title: 'Main/Sub Account',
      dataIndex: 'mainSubAccount',
      sorter: true,
      render: (text) => (
        <span className="table-cell-text">{text}</span>
      ),
    },
    {
      title: '',
      dataIndex: 'actions',
      width: 68,
      render: (_, record) => <ActionMenu record={record} />,
    },
  ]

  // Conditional Separators table columns
  const separatorsColumns = [
    {
      title: 'Condition Name',
      dataIndex: 'conditionName',
      width: 250,
      render: (text) => (
        <span className="table-cell-text">{text}</span>
      ),
    },
    {
      title: 'Apply At',
      dataIndex: 'applyAt',
      render: (data, record) => <ApplyAtCell data={data} record={record} />,
    },
    {
      title: 'Separators',
      dataIndex: 'separators',
      width: 350,
      render: (data, record) => <SeparatorsCell data={data} record={record} />,
    },
    {
      title: 'Dialogs',
      dataIndex: 'dialogs',
      width: 250,
      render: (data, record) => <DialogsCell data={data} record={record} />,
    },
    {
      title: '',
      dataIndex: 'actions',
      width: 68,
      render: (_, record) => <ActionMenu record={record} />,
    },
  ]

  // Get current table data and columns based on active tab
  const getCurrentTableConfig = () => {
    if (activeTab === 'separators') {
      return {
        data: separatorsData,
        columns: separatorsColumns,
        totalCount: separatorsData.length,
        itemName: 'Conditions'
      }
    }
    return {
      data: dialogsData,
      columns: dialogsColumns,
      totalCount: dialogsData.length,
      itemName: 'Dialogs'
    }
  }

  const { data: tableData, columns, totalCount, itemName } = getCurrentTableConfig()

  // Handle pagination changes
  const handlePageChange = (page, size) => {
    setCurrentPage(page)
    setPageSize(size)
  }

  // Handle page size change
  const handleShowSizeChange = (current, size) => {
    setCurrentPage(1)
    setPageSize(size)
  }

  // Reset page when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  // Get row class names including expanded state
  const getRowClassName = (record, index) => {
    const baseClass = index % 2 === 0 ? 'table-row-even' : 'table-row-odd'
    const expandedClass = expandedRows[record.key] ? 'expanded-row' : ''
    const separatorTableClass = activeTab === 'separators' ? 'separator-table-row' : ''
    return `${baseClass} ${expandedClass} ${separatorTableClass}`.trim()
  }

  return (
    <div className="workflow-page">
      {/* Header with breadcrumbs and actions */}
      <div className="workflow-header">
        <div className="breadcrumb-section">
          <Breadcrumb separator={<RightArrowIcon />} className="workflow-breadcrumb">
            <Breadcrumb.Item>
              <button 
                className="breadcrumb-item"
                onClick={() => navigate('/dashboard')}
              >
                Workflow Configuration
              </button>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <button 
                className="breadcrumb-item"
                onClick={() => navigate('/dashboard')}
              >
                Artemis
              </button>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="breadcrumb-item-current">Workflow_001</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        
        <div className="header-actions">
          <Button 
            type="primary" 
            className="export-button"
          >
            <UploadIcon />
            Export
          </Button>
          <Button 
            className="go-back-button"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeftIcon />
            Go Back
          </Button>
          <Button 
            type="primary" 
            className="add-new-button"
            onClick={showDrawer}
          >
            {activeTab === 'dialogs' ? 'Add New Dialog' : 'Add New Condition'}
          </Button>
        </div>
      </div>

      {/* Content Card */}
      <div className="workflow-content">
        {/* Tab Section */}
        <div className="workflow-tabs-section">
          <div 
            className={`tab-item ${activeTab === 'dialogs' ? 'active' : ''}`}
            onClick={() => handleTabChange('dialogs')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleTabChange('dialogs')}
          >
            <div className="tab-icon">
              <DialogIcon isActive={activeTab === 'dialogs'} />
            </div>
            <div className="tab-content">
              <div className="tab-number">{dialogsData.length}</div>
              <div className="tab-label">Dialogs</div>
            </div>
          </div>
          
          <div 
            className={`tab-item ${activeTab === 'separators' ? 'active' : ''}`}
            onClick={() => handleTabChange('separators')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleTabChange('separators')}
          >
            <div className="tab-icon">
              <SeparatorsIcon isActive={activeTab === 'separators'} />
            </div>
            <div className="tab-content">
              <div className="tab-number">{separatorsData.length}</div>
              <div className="tab-label">Conditional Separators</div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-section">
            <SearchIcon />
            <span className="search-placeholder">Search</span>
          </div>
          <div className="divider"></div>
          <div className="filter-section">
            <span className="filter-label">View By:</span>
            <span className="filter-value">Activated</span>
            <DropdownIcon />
          </div>
        </div>

        {/* Data Table */}
        <div className="workflow-table-container">
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{
              total: totalCount,
              pageSize: pageSize,
              current: currentPage,
              showTotal: (total, range) => 
                `Showing ${range[0]} to ${range[1]} of ${total} ${itemName}`,
              showSizeChanger: true,
              showQuickJumper: true,
              pageSizeOptions: ['10', '20', '50', '100'],
              onChange: handlePageChange,
              onShowSizeChange: handleShowSizeChange,
              className: 'workflow-pagination',
              showLessItems: true
            }}
            className="workflow-table"
            rowClassName={getRowClassName}
          />
        </div>
      </div>

      {/* Conditional Separator Drawer */}
      <ConditionalSeparatorDrawer
        visible={drawerVisible}
        onClose={handleDrawerClose}
        onAdd={handleAddCondition}
      />
    </div>
  )
}

export default Workflow 