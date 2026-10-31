import { Files, Search, Mail, Github, Linkedin, TerminalSquare } from 'lucide-react'
import { profile } from '../data/cv'

export default function ActivityBar({ onOpenAbout, onOpenContact, onToggleTerminal, terminalOpen }) {
  const Item = ({ children, label, onClick, active }) => (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`w-full flex items-center justify-center py-3 border-l-2 transition-colors ${
        active ? 'border-blue text-ink' : 'border-transparent text-muted hover:text-ink'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="w-12 shrink-0 bg-sidebar flex flex-col items-center justify-between border-r border-line">
      <div className="w-full flex flex-col">
        <Item label="Explorer" active>
          <Files size={20} />
        </Item>
        <Item label="Search (decorative)">
          <Search size={20} />
        </Item>
        <Item label="Toggle terminal" onClick={onToggleTerminal} active={terminalOpen}>
          <TerminalSquare size={20} />
        </Item>
        <Item label="Email me" onClick={onOpenContact}>
          <Mail size={20} />
        </Item>
        <Item label="GitHub" onClick={() => window.open(profile.links.github, '_blank')}>
          <Github size={20} />
        </Item>
        <Item label="LinkedIn" onClick={() => window.open(profile.links.linkedin, '_blank')}>
          <Linkedin size={20} />
        </Item>
      </div>
      <button
        onClick={onOpenAbout}
        title="About Kevin"
        className="mb-3 w-8 h-8 rounded-full overflow-hidden border border-line hover:border-blue transition-colors"
      >
        <img src="/kevin-headshot.png" alt="Kevin Nduka" className="w-full h-full object-cover" />
      </button>
    </div>
  )
}
