import React from 'react'

// Sort Icon Component - extracted from Figma
export const SortIcon = () => (
  <div className="sort-icon-container">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 14L12 9L17 14H7Z" fill="#777777"/>
      <path d="M7 10L12 15L17 10H7Z" fill="#777777"/>
    </svg>
  </div>
)

// Status Circle Icons - matching Figma design
export const ActiveStatusIcon = () => (
  <div className="status-icon active">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="5" fill="#52C41A"/>
    </svg>
  </div>
)

export const InactiveStatusIcon = () => (
  <div className="status-icon inactive">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="5" fill="#CCCCCC"/>
    </svg>
  </div>
)

// More Options Icon - matching Figma
export const MoreOptionsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="4" r="1.5" fill="#777777"/>
    <circle cx="8" cy="8" r="1.5" fill="#777777"/>
    <circle cx="8" cy="12" r="1.5" fill="#777777"/>
  </svg>
)

// Dialog Icon for tabs
export const DialogIcon = ({ isActive = false }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4H12C9.8 4 8.02 5.8 8.02 8L8 40C8 42.2 9.78 44 11.98 44H36C38.2 44 40 42.2 40 40V16L28 4ZM32 36H16V32H32V36ZM32 28H16V24H32V28ZM26 18V7L37 18H26Z" fill={isActive ? "#00B2E3" : "#777777"}/>
  </svg>
)

// Conditional Separators Icon for tabs - Updated workflow icon
export const SeparatorsIcon = ({ isActive = false }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.1799 18.34L12.2399 9.4C11.4599 8.62 10.1999 8.62 9.41994 9.4C8.63994 10.18 8.63994 11.44 9.41994 12.22L18.3399 21.14L21.1799 18.34ZM30.6999 9.7L33.0799 12.08L9.39994 35.76C8.61994 36.54 8.61994 37.8 9.39994 38.58C10.1799 39.36 11.4399 39.36 12.2199 38.58L35.9199 14.92L38.2999 17.3C38.9199 17.92 39.9999 17.48 39.9999 16.58V9C39.9999 8.44 39.5599 8 38.9999 8H31.4199C30.5199 8 30.0799 9.08 30.6999 9.7ZM29.6599 26.82L26.8399 29.64L33.0999 35.9L30.6999 38.3C30.0799 38.92 30.5199 40 31.4199 40H38.9999C39.5599 40 39.9999 39.56 39.9999 39V31.42C39.9999 30.52 38.9199 30.08 38.2999 30.72L35.9199 33.1L29.6599 26.82Z" fill={isActive ? "#00B2E3" : "#777777"}/>
  </svg>
)

// Search Icon
export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#BEBFC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14L11.1 11.1" stroke="#BEBFC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Dropdown Arrow Icon
export const DropdownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Settings Icon
export const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"/>
    <path d="M12.9 8.8C12.82 9.1 12.7 9.39 12.54 9.66L13.66 10.54C13.78 10.64 13.81 10.82 13.72 10.96L12.72 12.04C12.63 12.18 12.45 12.22 12.31 12.16L10.94 11.56C10.69 11.76 10.42 11.93 10.13 12.05L9.94 13.53C9.92 13.69 9.78 13.81 9.62 13.81H7.62C7.46 13.81 7.32 13.69 7.3 13.53L7.11 12.05C6.82 11.93 6.55 11.76 6.3 11.56L4.93 12.16C4.79 12.22 4.61 12.18 4.52 12.04L3.52 10.96C3.43 10.82 3.46 10.64 3.58 10.54L4.7 9.66C4.54 9.39 4.42 9.1 4.34 8.8L2.86 8.61C2.7 8.59 2.58 8.45 2.58 8.29V6.29C2.58 6.13 2.7 5.99 2.86 5.97L4.34 5.78C4.42 5.48 4.54 5.19 4.7 4.92L3.58 4.04C3.46 3.94 3.43 3.76 3.52 3.62L4.52 2.54C4.61 2.4 4.79 2.36 4.93 2.42L6.3 3.02C6.55 2.82 6.82 2.65 7.11 2.53L7.3 1.05C7.32 0.89 7.46 0.77 7.62 0.77H9.62C9.78 0.77 9.92 0.89 9.94 1.05L10.13 2.53C10.42 2.65 10.69 2.82 10.94 3.02L12.31 2.42C12.45 2.36 12.63 2.4 12.72 2.54L13.72 3.62C13.81 3.76 13.78 3.94 13.66 4.04L12.54 4.92C12.7 5.19 12.82 5.48 12.9 5.78L14.38 5.97C14.54 5.99 14.66 6.13 14.66 6.29V8.29C14.66 8.45 14.54 8.59 14.38 8.61L12.9 8.8Z" fill="white"/>
  </svg>
)

// Arrow Left Icon
export const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 4L6 8L10 12" stroke="#00B2E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Plus Icon
export const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3.5V12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 8H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Right Arrow for breadcrumb
export const RightArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 4L10 8L6 12" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Edit Icon for dropdown menu
export const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425L2.25 12.9375ZM15.5325 5.2825C15.8325 4.9825 15.8325 4.4925 15.5325 4.1925L13.8075 2.4675C13.5075 2.1675 13.0175 2.1675 12.7175 2.4675L11.4075 3.7775L14.22 6.59L15.5325 5.2825Z" fill="#2A2D2E"/>
  </svg>
)

// Delete Icon for dropdown menu
export const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4.5 15.75C4.5 16.575 5.175 17.25 6 17.25H12C12.825 17.25 13.5 16.575 13.5 15.75V5.25H4.5V15.75ZM14.25 2.25H11.625L10.875 1.5H7.125L6.375 2.25H3.75V4.5H14.25V2.25Z" fill="#B1203D"/>
  </svg>
)

// Upload/Export Icon for header buttons
export const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0002 12.5V15H5.00016V12.5H3.3335V15C3.3335 15.9167 4.0835 16.6667 5.00016 16.6667H15.0002C15.9168 16.6667 16.6668 15.9167 16.6668 15V12.5H15.0002ZM5.8335 7.50004L7.0085 8.67504L9.16683 6.52504V13.3334H10.8335V6.52504L12.9918 8.67504L14.1668 7.50004L10.0002 3.33337L5.8335 7.50004Z" fill="white"/>
  </svg>
)

// Notification Icon for header
export const NotificationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_108_8988)">
      <path d="M13.1427 6.1429V6.62861C14.9894 7.00378 16.3808 8.63724 16.3808 10.5953V11.0709C16.3808 12.2624 16.8184 13.4084 17.6077 14.2989L17.7949 14.5088C18.0074 14.7491 18.0605 15.0881 17.929 15.3791C17.7975 15.67 17.5091 15.8572 17.1903 15.8572H7.47602C7.15727 15.8572 6.86815 15.67 6.73756 15.3791C6.60697 15.0881 6.6592 14.7491 6.871 14.5088L7.05861 14.2989C7.84891 13.4084 8.28555 12.2624 8.28555 11.0709V10.5953C8.28555 8.63724 9.65415 7.00378 11.5236 6.62861V6.1429C11.5236 5.69589 11.8854 5.33337 12.3332 5.33337C12.7809 5.33337 13.1427 5.69589 13.1427 6.1429ZM12.3332 18.2858C11.9031 18.2858 11.4908 18.1163 11.1872 17.8127C10.8836 17.5091 10.7141 17.074 10.7141 16.6667H13.9522C13.9522 17.074 13.7827 17.5091 13.4791 17.8127C13.1756 18.1163 12.7405 18.2858 12.3332 18.2858Z" fill="#2A2D2E"/>
    </g>
    <defs>
      <clipPath id="clip0_108_8988">
        <rect width="11.3333" height="12.9524" fill="white" transform="translate(6.6665 5.33337)"/>
      </clipPath>
    </defs>
  </svg>
)