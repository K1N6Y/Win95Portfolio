import { useState } from 'react'
import StartMenu from './StartMenu'
import PortfolioWindow from './PortfolioWindow'
import './App.css'

function App() {
  const [section, setSection] = useState<'about' | 'projects' | 'contact'>('about')

  return (
    <div className="App">
      <StartMenu onSelect={setSection} />
      <PortfolioWindow active={section} />
    </div>
  )
}

export default App
