import { X, FileJson, FileCode2, FileText } from 'lucide-react'
import { fileMeta } from '../data/files'

const iconFor = (lang) => {
  if (lang === 'JSON' || lang === 'YAML') return FileJson
  if (lang === 'Markdown') return FileText
  return FileCode2
}

export default function TabBar({ openTabs, activeId, onSelect, onClose }) {
  return (
    <div className="flex bg-base border-b border-line overflow-x-auto">
      {openTabs.map((id) => {
        const meta = fileMeta(id)
        if (!meta) return null
        const Icon = iconFor(meta.lang)
        const active = activeId === id
        return (
          <div
            key={id}
            onClick={() => onSelect(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelect(id)}
            className={`group flex items-center gap-2 pl-3 pr-2 py-2 text-[13px] border-r border-line cursor-pointer whitespace-nowrap ${
              active ? 'bg-elevated text-ink border-t-2 border-t-blue' : 'text-muted hover:text-ink border-t-2 border-t-transparent'
            }`}
          >
            <Icon size={14} className={meta.color} />
            <span>{meta.name}</span>
            <span
              onClick={(e) => {
                e.stopPropagation()
                onClose(id)
              }}
              className="ml-1 p-0.5 rounded hover:bg-line opacity-0 group-hover:opacity-100"
              aria-label={`Close ${meta.name}`}
            >
              <X size={12} />
            </span>
          </div>
        )
      })}
    </div>
  )
}
