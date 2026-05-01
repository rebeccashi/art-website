import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from './menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
    </>
  )
}

export default App
