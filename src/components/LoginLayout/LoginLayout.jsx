import React from 'react';
import { Logo } from '../UI';
import './LoginLayout.scss';

const LoginLayout = ({ children }) => {
  return (
    <div className="login-layout">
      {/* Left Side - Branding */}
      <div className="login-layout__branding">
        <div className="login-layout__logo-container">
          <Logo variant="white" size="medium" />
        </div>
        <div className="login-layout__branding-content">
          <div className="login-layout__hero">
            <h1 className="login-layout__title">Housecalls Pro</h1>
            <p className="login-layout__subtitle">
              Modernize your digital patient outreach and drive communications from your EHR
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="login-layout__form-section">
        <div className="login-layout__form-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginLayout; 