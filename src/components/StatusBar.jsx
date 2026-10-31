import { GitBranch, MapPin, GraduationCap } from 'lucide-react'
import { fileMeta } from '../data/files'

export default function StatusBar({ activeId, onToggleTerminal }) {
  const meta = fileMeta(activeId)
  return (
    <div className="h-6 shrink-0 bg-blue text-[#1e1e2e] flex items-center justify-between px-3 text-[12px] font-medium select-none">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <GitBranch size={13} /> main
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={13} /> Lagos, NG
        </span>
        <button onClick={onToggleTerminal} className="hover:underline">
          Terminal
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <GraduationCap size={13} /> Teaching Mode: ON
        </span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>{meta?.lang ?? 'Plain Text'}</span>
      </div>
    </div>
  )
}
