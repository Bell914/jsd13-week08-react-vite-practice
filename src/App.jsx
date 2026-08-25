import React from 'react'
import { HeroSection } from './components/sections/HeroSection'

function App() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact') || document.getElementById('about')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] overflow-x-clip">
      {/* 1. Hero Section */}
      <HeroSection onContactClick={handleContactClick} />
    </div>
  )
}

export default App
