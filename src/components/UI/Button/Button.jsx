import React, { forwardRef } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import './Button.scss'

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  loading = false,
  block = false,
  icon = null,
  iconPosition = 'left',
  className = '',
  onClick = () => {},
  ...props
}, ref) => {
  const buttonClasses = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    disabled && 'ui-button--disabled',
    loading && 'ui-button--loading',
    block && 'ui-button--block',
    icon && 'ui-button--with-icon',
    className
  ].filter(Boolean).join(' ')

  const handleClick = (e) => {
    if (!disabled && !loading) {
      onClick(e)
    }
  }

  const renderIcon = (position) => {
    if (loading && position === 'left') {
      return <LoadingOutlined className="ui-button__icon ui-button__icon--loading" />
    }
    
    if (icon && iconPosition === position) {
      return <span className={`ui-button__icon ui-button__icon--${position}`}>{icon}</span>
    }
    
    return null
  }

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-busy={loading}
      {...props}
    >
      {renderIcon('left')}
      
      <span className="ui-button__content">
        {children}
      </span>
      
      {renderIcon('right')}
    </button>
  )
})

Button.displayName = 'Button'

export default Button 