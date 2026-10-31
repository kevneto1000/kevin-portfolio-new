import { useState } from 'react'
import ActivityBar from './components/ActivityBar'
import Sidebar from './components/Sidebar'
import TabBar from './components/TabBar'
import StatusBar from './components/StatusBar'
import TerminalPanel from './components/TerminalPanel'
import BootScreen from './components/BootScreen'

import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import ProjectFile from './sections/ProjectFile'
import { projects } from './data/cv'

const projectBySlug = Object.fromEntries(projects.map((p) => [`project-${p.slug}`, p]))

function renderContent(id) {
  switch (id) {
    case 'about':
      return <About />
    case 'experience':
      return <Experience />
    case 'skills':
      return <Skills />
    case 'education':
      return <Education />
    case 'contact':
      return <Contact />
    default:
      if (projectBySlug[id]) return <ProjectFile project={projectBySlug[id]} />
      return null
  }
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const [openTabs, setOpenTabs] = useState(['about'])
  const [activeId, setActiveId] = useState('about')
  const [terminalOpen, setTerminalOpen] = useState(false)

  const openFile = (id) => {
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]))
    setActiveId(id)
  }

  const closeTab = (id) => {
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== id)
      if (activeId === id) {
        setActiveId(next[next.length - 1] ?? null)
      }
      return next
    })
  }

  if (!booted) {
    return <BootScreen onDone={() => setBooted(true)} />
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-base text-ink overflow-hidden">
      <div className="flex flex-1 min-h-0">
        <ActivityBar
          onOpenAbout={() => openFile('about')}
          onOpenContact={() => openFile('contact')}
          onToggleTerminal={() => setTerminalOpen((v) => !v)}
          terminalOpen={terminalOpen}
        />
        <Sidebar activeId={activeId} onSelect={openFile} />

        <div className="flex-1 min-w-0 flex flex-col">
          <TabBar openTabs={openTabs} activeId={activeId} onSelect={setActiveId} onClose={closeTab} />

          <div className="flex-1 min-h-0 overflow-y-auto">
            {activeId ? (
              renderContent(activeId)
            ) : (
              <div className="h-full flex items-center justify-center text-muted text-sm">
                No file open. Pick one from the explorer, or the terminal below.
              </div>
            )}
          </div>

          {terminalOpen && (
            <TerminalPanel onOpenFile={openFile} onClose={() => setTerminalOpen(false)} />
          )}
        </div>
      </div>

      <StatusBar activeId={activeId} onToggleTerminal={() => setTerminalOpen((v) => !v)} />
    </div>
  )
}
