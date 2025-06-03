import { Window, WindowContent, WindowHeader } from 'react95'

interface PortfolioWindowProps {
  active: 'about' | 'projects' | 'contact'
}

const PortfolioWindow = ({ active }: PortfolioWindowProps) => {
  const renderSection = () => {
    switch (active) {
      case 'about':
        return <div>About section placeholder</div>
      case 'projects':
        return <div>Projects section placeholder</div>
      case 'contact':
        return <div>Contact section placeholder</div>
      default:
        return <div>Select a section from the Start menu.</div>
    }
  }

  return (
    <Window style={{ width: '600px', margin: '1rem auto' }}>
      <WindowHeader>My Portfolio</WindowHeader>
      <WindowContent>{renderSection()}</WindowContent>
    </Window>
  )
}

export default PortfolioWindow
