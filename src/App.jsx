import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Workflow from './pages/Workflow'
import './App.scss'

function App() {
  return (
    <Routes>
      {/* Login route without layout */}
      <Route path="/login" element={<Login />} />
      
      {/* Main application routes with layout */}
      <Route path="/*" element={
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workflow" element={<Workflow />} />
            
            {/* Main menu routes */}
            <Route path="/users" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Users Page</div>} />
            <Route path="/billing" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Billing Page</div>} />
            <Route path="/roles" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Roles Page</div>} />
            
            {/* Tools submenu routes */}
            <Route path="/api-logs" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>API Logs Page</div>} />
            <Route path="/billing-management" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Billing Management Page</div>} />
            <Route path="/contact-logs" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Contact Logs Page</div>} />
            <Route path="/future-outreach" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Future Outreach Page</div>} />
            <Route path="/holiday-rules" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Holiday Rules Page</div>} />
            <Route path="/migrate-account" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Migrate Account Page</div>} />
            <Route path="/ondemand" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)', color: '#2a2d2e'}}>OnDemand Page - This page is currently under development.</div>} />
            <Route path="/opt-out-management" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Opt-Out Management Page</div>} />
            <Route path="/phone-scrubbing" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Phone Scrubbing Page</div>} />
            <Route path="/patient-feedback" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Patient Feedback Page</div>} />
            <Route path="/patient-search" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Patient Search Page</div>} />
            
            {/* Legacy routes */}
            <Route path="/patients" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Patients Page</div>} />
            <Route path="/messages" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Messages Page</div>} />
            <Route path="/reports" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Reports Page</div>} />
            <Route path="/settings" element={<div style={{padding: '24px', background: '#ffffff', minHeight: 'calc(100vh - 64px)'}}>Settings Page</div>} />
          </Routes>
        </MainLayout>
      } />
    </Routes>
  )
}

export default App
