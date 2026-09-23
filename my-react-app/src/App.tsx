import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import StyleGuide from './pages/styleguide/StyleGuide'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/styleguide" element={<StyleGuide />} />
      </Routes>
    </>
  )
}

export default App
