import React, { forwardRef } from 'react'
import { CheckOutlined } from '@ant-design/icons'
import './Checkbox.scss'

const Checkbox = forwardRef(({
  checked = false,
  onChange = () => {},
  disabled = false,
  label = '',
  id,
  className = '',
  size = 'medium',
  error = '',
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  const handleChange = (e) => {
    if (!disabled) {
      onChange(e.target.checked, e)
    }
  }

  const wrapperClasses = [
    'ui-checkbox-wrapper',
    disabled && 'ui-checkbox-wrapper--disabled',
    error && 'ui-checkbox-wrapper--error',
    className
  ].filter(Boolean).join(' ')

  const checkboxClasses = [
    'ui-checkbox',
    `ui-checkbox--${size}`,
    checked && 'ui-checkbox--checked',
    disabled && 'ui-checkbox--disabled',
    error && 'ui-checkbox--error'
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      <div className="ui-checkbox__container">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="ui-checkbox__input"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
          {...props}
        />
        
        <div className={checkboxClasses}>
          {checked && (
            <CheckOutlined className="ui-checkbox__icon" />
          )}
        </div>
        
      </div>
      
      {label && (
        <label 
          htmlFor={checkboxId} 
          className="ui-checkbox__label"
        >
          {label}
        </label>
      )}
      
      {error && (
        <span 
          className="ui-checkbox__error" 
          id={`${checkboxId}-error`} 
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox 