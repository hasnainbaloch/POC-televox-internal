import React from 'react'
import './Logo.scss'

// Import logo assets
import televoxWhiteLogo from '../../../images/login/televox-logo-white.svg'
import televoxHouseCallsLogo from '../../../images/login/logos/televox-housecalls-pro-logo.svg'
import intradoLogo from '../../../images/Intrado-HouseCalls-Pro-logo.svg'
import practiceEditionLogo from '../../../images/practiceEdition/practice-edition-logo-televox.png'

const Logo = ({
  variant = 'white',
  size = 'medium',
  className = '',
  alt = 'TeleVox Logo',
  ...props
}) => {
  const getLogoSrc = () => {
    switch (variant) {
      case 'white':
        return televoxWhiteLogo
      case 'housecalls':
        return televoxHouseCallsLogo
      case 'intrado':
        return intradoLogo
      case 'practice-edition':
        return practiceEditionLogo
      default:
        return televoxWhiteLogo
    }
  }

  const logoClasses = [
    'ui-logo',
    `ui-logo--${size}`,
    `ui-logo--${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <img
      src={getLogoSrc()}
      alt={alt}
      className={logoClasses}
      {...props}
    />
  )
}

export default Logo 