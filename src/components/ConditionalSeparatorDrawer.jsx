import React, { useState } from 'react'
import { Drawer, Button, Select, Tag, Switch } from 'antd'
import { PlusOutlined, CloseOutlined, InfoCircleOutlined } from '@ant-design/icons'
import './ConditionalSeparatorDrawer.scss'

const { Option } = Select

const ConditionalSeparatorDrawer = ({ visible, onClose, onAdd }) => {
  const [applyAt, setApplyAt] = useState('workflow')
  const [configExpanded, setConfigExpanded] = useState(true)
  const [separatorsExpanded, setSeparatorsExpanded] = useState(true)
  const [dialogsExpanded, setDialogsExpanded] = useState(true)
  const [mainOperator, setMainOperator] = useState('AND')
  const [separators, setSeparators] = useState([
    {
      id: 1,
      type: 'Provider',
      operator: 'Equals',
      values: ['Dr Jarso', 'Dr Smith']
    }
  ])

  const addSeparator = () => {
    const newSeparator = {
      id: Date.now(),
      type: 'Provider',
      operator: 'Equals',
      values: []
    }
    setSeparators([...separators, newSeparator])
  }

  const removeSeparator = (id) => {
    setSeparators(separators.filter(separator => separator.id !== id))
  }

  const updateSeparator = (id, field, value) => {
    setSeparators(separators.map(separator => 
      separator.id === id ? { ...separator, [field]: value } : separator
    ))
  }

  const handleAddCondition = () => {
    const conditionData = {
      applyAt,
      separators,
      mainOperator
    }
    onAdd(conditionData)
    onClose()
  }

  const ChevronIcon = ({ isExpanded }) => {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ 
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
        transition: 'transform 0.2s ease' 
      }}>
        <path d="M2.5 13.3333V11.5033H17.1437V13.3333H2.5ZM6.16125 9.672L9.82125 6.012L13.4825 9.672H6.16125Z" fill="#BEBFC0"/>
      </svg>
    )
  }

  const DeleteIcon = () => {
    return (
      <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.4997 12.5V13.3333H26.6663V15H25.833V25.8333C25.833 26.75 25.083 27.5 24.1663 27.5H15.833C14.9163 27.5 14.1663 26.75 14.1663 25.8333V15H13.333V13.3333H17.4997V12.5H22.4997ZM15.833 25.8333H24.1663V15H15.833V25.8333ZM17.4997 16.6667H19.1663V24.1667H17.4997V16.6667ZM22.4997 16.6667H20.833V24.1667H22.4997V16.6667Z" fill="#B1203D"/>
      </svg>
    )
  }

  const DropdownIcon = () => {
    return (
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.578125 0.504297C0.253125 0.829297 0.253125 1.35430 0.578125 1.67930L4.40312 5.50430C4.72812 5.82930 5.25312 5.82930 5.57812 5.50430L9.40312 1.67930C9.72812 1.35430 9.72812 0.829297 9.40312 0.504297C9.07812 0.179297 8.55312 0.179297 8.22812 0.504297L4.98613 3.73763L1.75312 0.504297C1.42812 0.179297 0.894531 0.187597 0.578125 0.504297Z" fill="#BEBFC0"/>
      </svg>
    )
  }

  return (
    <Drawer
      title={null}
      placement="right"
      width={650}
      onClose={onClose}
      open={visible}
      className="conditional-separator-drawer"
      closable={false}
      bodyStyle={{ padding: 0 }}
    >
      {/* Header */}
      <div className="drawer-header">
        <div className="header-content">
          <h3 className="header-title">Add New Condition</h3>
          <Button 
            type="text" 
            icon={<CloseOutlined />}
            className="close-button"
            onClick={onClose}
          />
        </div>
      </div>

      {/* Content */}
      <div className="drawer-content">
        {/* Configuration Section */}
        <div className="drawer-section">
          <div className="section-header" onClick={() => setConfigExpanded(!configExpanded)}>
            <span className="section-title">Configuration</span>
            <ChevronIcon isExpanded={configExpanded} />
          </div>
          
          {configExpanded && (
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Apply At
                  <span className="required">*</span>
                </label>
                <div className="toggle-container">
                  <Switch 
                    checked={applyAt === 'triggers'}
                    onChange={(checked) => setApplyAt(checked ? 'triggers' : 'workflow')}
                    className="apply-at-switch"
                  />
                  <div className="toggle-labels">
                    <span className={`toggle-label ${applyAt === 'workflow' ? 'active' : ''}`}>Workflow</span>
                    <span className={`toggle-label ${applyAt === 'triggers' ? 'active' : ''}`}>Triggers</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Separators Section */}
        <div className="drawer-section">
          <div className="section-header" onClick={() => setSeparatorsExpanded(!separatorsExpanded)}>
            <span className="section-title">Separators</span>
            <ChevronIcon isExpanded={separatorsExpanded} />
          </div>
          
          {separatorsExpanded && (
            <div className="section-content">
                            <div className="separators-container">
                <div className="separators-wrapper">
                  {separators.map((separator, index) => (
                    <React.Fragment key={separator.id}>
                      <div className="separator-item">
                        {/* Left Connector Line */}
                        <div className="left-connector">
                          <div className="connector-dot"></div>
                          {index < separators.length - 1 && <div className="connector-line"></div>}
                        </div>

                        {/* Separator Content */}
                        <div className="separator-content">
                          {/* Separator Header */}
                          <div className="separator-header">
                            <span className="separator-title">Separator {String(index + 1).padStart(2, '0')}</span>
                            <span className="required">*</span>
                            <InfoCircleOutlined className="info-icon" />
                            {separators.length > 1 && (
                              <Button
                                type="text"
                                icon={<DeleteIcon />}
                                className="delete-button"
                                onClick={() => removeSeparator(separator.id)}
                              />
                            )}
                          </div>

                          {/* Separator Fields */}
                          <div className="separator-fields">
                            <div className="field-row">
                              <div className="field-group">
                                                              <Select
                                value={separator.type}
                                onChange={(value) => updateSeparator(separator.id, 'type', value)}
                                className="field-select"
                                placeholder="Provider"
                                suffixIcon={<DropdownIcon />}
                              >
                                  <Option value="Provider">Provider</Option>
                                  <Option value="Department">Department</Option>
                                  <Option value="Location">Location</Option>
                                  <Option value="Specialty">Specialty</Option>
                                </Select>
                              </div>

                              <div className="field-group">
                                                              <Select
                                value={separator.operator}
                                onChange={(value) => updateSeparator(separator.id, 'operator', value)}
                                className="field-select"
                                placeholder="Equals"
                                suffixIcon={<DropdownIcon />}
                              >
                                  <Option value="Equals">Equals</Option>
                                  <Option value="Contains">Contains</Option>
                                  <Option value="Not Equals">Not Equals</Option>
                                  <Option value="Starts With">Starts With</Option>
                                </Select>
                              </div>

                              <div className="field-group values-field">
                                <Select
                                  mode="tags"
                                  value={separator.values}
                                  onChange={(values) => updateSeparator(separator.id, 'values', values)}
                                  className="values-select"
                                  placeholder="Type to add values"
                                  tagRender={(props) => {
                                    const { label, closable, onClose, value } = props
                                    const allValues = separator.values || []
                                    const currentIndex = allValues.indexOf(value)
                                    const isFirstValue = currentIndex === 0
                                    const totalCount = allValues.length
                                    
                                    // Show first value + count if there are multiple values
                                    if (totalCount > 1 && isFirstValue) {
                                      return (
                                        <div className="tag-container">
                                          <Tag
                                            closable={closable}
                                            onClose={onClose}
                                            className="custom-tag"
                                          >
                                            {label}
                                          </Tag>
                                          <Tag
                                            closable={false}
                                            className="custom-tag count-tag"
                                          >
                                            +{totalCount - 1} more
                                          </Tag>
                                        </div>
                                      )
                                    }
                                    
                                    // Show individual tag if it's the only value
                                    if (totalCount === 1) {
                                      return (
                                        <Tag
                                          closable={closable}
                                          onClose={onClose}
                                          className="custom-tag"
                                        >
                                          {label}
                                        </Tag>
                                      )
                                    }
                                    
                                    // Don't render additional tags after the first one when count is shown
                                    return null
                                  }}
                                  open={false}
                                  dropdownStyle={{ display: 'none' }}
                                >
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Operator Section */}
                      {index < separators.length - 1 && (
                        <div className="operator-section">
                          <div className="operator-connector">
                            <div className="operator-dot"></div>
                            <div className="operator-line"></div>
                          </div>
                          <div className="operator-control">
                            <div className="operator-field">
                              <div className="field-label">
                                <span className="label-text">Operator</span>
                                <InfoCircleOutlined className="info-icon" />
                              </div>
                              <Select
                                value={mainOperator}
                                onChange={setMainOperator}
                                className="operator-select"
                                placeholder="AND"
                                suffixIcon={<DropdownIcon />}
                              >
                                <Option value="AND">AND</Option>
                                <Option value="OR">OR</Option>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Add Button */}
                <div className="add-button-container">
                  <Button
                    type="link"
                    icon={<PlusOutlined />}
                    onClick={addSeparator}
                    className="add-separator-button"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dialogs Section */}
        <div className="drawer-section">
          <div className="section-header" onClick={() => setDialogsExpanded(!dialogsExpanded)}>
            <span className="section-title">Dialogs</span>
            <ChevronIcon isExpanded={dialogsExpanded} />
          </div>
          
          {dialogsExpanded && (
            <div className="section-content">
              <div className="form-group">
                <label className="form-label">
                  Select Dialogs
                  <span className="required">*</span>
                </label>
                <Select
                  mode="multiple"
                  placeholder="Select dialogs"
                  className="dialogs-select"
                  defaultValue={['Dialog_001', 'Dialog_002']}
                >
                  <Option value="Dialog_001">Dialog_001</Option>
                  <Option value="Dialog_002">Dialog_002</Option>
                  <Option value="Dialog_003">Dialog_003</Option>
                  <Option value="Dialog_004">Dialog_004</Option>
                  <Option value="Dialog_005">Dialog_005</Option>
                </Select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="drawer-footer">
        <Button 
          onClick={handleAddCondition}
          className="add-button"
          size="large"
        >
          Add
        </Button>
        <Button 
          type="primary" 
          onClick={onClose} 
          className="close-button"
          size="large"
        >
          Close
        </Button>
      </div>
    </Drawer>
  )
}

export default ConditionalSeparatorDrawer 