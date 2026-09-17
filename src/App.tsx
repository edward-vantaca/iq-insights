import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import NavPanel from './components/Layout/NavPanel'
import DerivedInsights from './pages/DerivedInsights'
import Dashboard from './pages/Dashboard'
import { ClientProvider } from './context/ClientContext'

export default function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()
  const fullBleed = location.pathname.startsWith('/derived-insights')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <ClientProvider>
    <div className="mx-auto h-full bg-color-stage">
      <Navbar
        toggleMobileNav={setMobileNavVisible}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((d) => !d)}
      />
      <div
        className={`flex flex-row bg-color-stage ${
          fullBleed ? 'h-[calc(100vh-4rem)] overflow-hidden' : 'min-h-screen'
        }`}
      >
        <NavPanel
          showMobileNav={mobileNavVisible}
          toggleMobileNav={setMobileNavVisible}
        />
        <div
          className={
            fullBleed ? 'flex-1 overflow-hidden' : 'flex-1 p-4 sm:p-4 md:p-6 lg:p-8'
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/derived-insights" element={<DerivedInsights />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
    </ClientProvider>
  )
}
