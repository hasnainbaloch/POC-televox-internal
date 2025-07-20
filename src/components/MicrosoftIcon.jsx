import React from 'react'

const MicrosoftIcon = ({ className, size = 16 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="2" width="9" height="9" fill="#F25022"/>
      <rect x="13" y="2" width="9" height="9" fill="#7FBA00"/>
      <rect x="2" y="13" width="9" height="9" fill="#00A4EF"/>
      <rect x="13" y="13" width="9" height="9" fill="#FFB900"/>
    </svg>
  )
}

export default MicrosoftIcon