import React, { useState, forwardRef } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import './Input.scss'

const Input = forwardRef(({
  type = 'text',
  placeholder = '',
  label = '',
  value = '',
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  disabled = false,
  error = '',
  icon = null,
  iconPosition = 'right',
  className = '',
  autoComplete = '',
  required = false,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [internalValue, setInternalValue] = useState(value)

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur(e)
  }

  const handleChange = (e) => {
    setInternalValue(e.target.value)
    onChange(e)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const inputType = type === 'password' && showPassword ? 'text' : type

  const inputClasses = [
    'ui-input',
    isFocused && 'ui-input--focused',
    disabled && 'ui-input--disabled',
    error && 'ui-input--error',
    icon && 'ui-input--with-icon',
    icon && `ui-input--icon-${iconPosition}`,
    className
  ].filter(Boolean).join(' ')

  const wrapperClasses = [
    'ui-input-wrapper',
    error && 'ui-input-wrapper--error'
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="ui-input__label" htmlFor={props.id}>
          {label}
          {required && <span className="ui-input__required">*</span>}
        </label>
      )}
      
      <div className="ui-input__container">
        {icon && iconPosition === 'left' && (
          <span className="ui-input__icon ui-input__icon--left">
            {icon}
          </span>
        )}
        
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={inputClasses}
          autoComplete={autoComplete}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            className="ui-input__icon ui-input__icon--password"
            onClick={togglePasswordVisibility}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </button>
        )}
        
        {icon && iconPosition === 'right' && type !== 'password' && (
          <span className="ui-input__icon ui-input__icon--right">
            {icon}
          </span>
        )}
      </div>
      
      {error && (
        <span className="ui-input__error" id={`${props.id}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input 