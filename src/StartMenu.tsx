import { useState } from 'react'
import { Button, List, ListItem } from 'react95'

interface StartMenuProps {
  onSelect: (section: 'about' | 'projects' | 'contact') => void
}

const StartMenu = ({ onSelect }: StartMenuProps) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (section: 'about' | 'projects' | 'contact') => {
    setOpen(false)
    onSelect(section)
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button onClick={() => setOpen((o) => !o)}>Start</Button>
      {open && (
        <List style={{ position: 'absolute', bottom: '100%', left: 0 }}>
          <ListItem onClick={() => handleSelect('about')}>About</ListItem>
          <ListItem onClick={() => handleSelect('projects')}>Projects</ListItem>
          <ListItem onClick={() => handleSelect('contact')}>Contact</ListItem>
        </List>
      )}
    </div>
  )
}

export default StartMenu
