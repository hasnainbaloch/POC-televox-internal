import React from 'react'

const LockIcon = ({ className, size = 16 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M7 10V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10H18C19.1046 10 20 10.8954 20 12V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V12C4 10.8954 4.89543 10 6 10H7ZM9 10H15V8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V10Z" 
        fill="currentColor"
      />
    </svg>
  )
}

export default LockIcon