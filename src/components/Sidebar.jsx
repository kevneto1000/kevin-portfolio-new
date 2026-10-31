import { useState } from 'react'
import { ChevronRight, ChevronDown, FileJson, FileCode2, FileText, Folder, FolderOpen } from 'lucide-react'
import { rootFiles, projectFiles } from '../data/files'

const iconFor = (lang) => {
  if (lang === 'JSON' || lang === 'YAML') return FileJson
  if (lang === 'Markdown') return FileText
  return FileCode2
}

export default function Sidebar({ activeId, onSelect }) {
  const [projectsOpen, setProjectsOpen] = useState(true)

  const Row = ({ file, indent }) => {
    const Icon = iconFor(file.lang)
    const active = activeId === file.id
    return (
      <button
        onClick={() => onSelect(file.id)}
        className={`w-full flex items-center gap-2 text-left px-2 py-1 text-[13px] rounded-sm ${
          active ? 'bg-elevated text-ink' : 'text-muted hover:bg-elevated/60 hover:text-ink'
        }`}
        style={{ paddingLeft: indent }}
      >
        <Icon size={14} className={file.color} />
        <span className="truncate">{file.name}</span>
      </button>
    )
  }

  return (
    <div className="w-56 shrink-0 bg-sidebar border-r border-line hidden md:flex flex-col overflow-y-auto">
      <div className="px-3 py-2 text-[11px] tracking-widest text-muted uppercase">Explorer</div>
      <div className="px-2 pb-1 text-[12px] text-ink font-semibold">kevin-nduka-portfolio</div>
      <div className="flex flex-col gap-0.5 px-1">
        {rootFiles.slice(0, 2).map((f) => (
          <Row key={f.id} file={f} indent={20} />
        ))}

        <button
          onClick={() => setProjectsOpen((v) => !v)}
          className="w-full flex items-center gap-1 text-left px-2 py-1 text-[13px] text-muted hover:text-ink"
        >
          {projectsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          {projectsOpen ? <FolderOpen size={14} className="text-peach" /> : <Folder size={14} className="text-peach" />}
          <span>projects</span>
        </button>
        {projectsOpen &&
          projectFiles.map((f) => <Row key={f.id} file={f} indent={40} />)}

        {rootFiles.slice(2).map((f) => (
          <Row key={f.id} file={f} indent={20} />
        ))}
      </div>
    </div>
  )
}
