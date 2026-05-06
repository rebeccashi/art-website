// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
