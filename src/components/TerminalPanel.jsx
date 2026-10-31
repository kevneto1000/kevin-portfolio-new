import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { allFiles } from '../data/files'
import { profile } from '../data/cv'

const HELP_TEXT = [
  'available commands:',
  '  help            show this list',
  '  whoami          print a one-line bio',
  '  ls              list files in this project',
  '  cat <file>      open a file in the editor (e.g. cat about.jsx)',
  '  open <file>     alias for cat',
  '  contact         jump straight to contact.js',
  '  clear           clear the terminal',
]

export default function TerminalPanel({ onOpenFile, onClose }) {
  const [lines, setLines] = useState([
    'kevin@lagos:~/portfolio$ boot sequence complete.',
    "type 'help' to see what this terminal can do.",
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const findFile = (name) => {
    const clean = name.replace(/^projects\//, '').trim()
    return allFiles.find((f) => f.name === clean || f.name === name.trim())
  }

  const run = (raw) => {
    const cmd = raw.trim()
    const out = [`kevin@lagos:~/portfolio$ ${cmd}`]
    if (!cmd) {
      setLines((l) => [...l, ...out])
      return
    }
    const [word, ...rest] = cmd.split(/\s+/)
    const arg = rest.join(' ')

    switch (word) {
      case 'help':
        out.push(...HELP_TEXT)
        break
      case 'whoami':
        out.push(`${profile.name.toLowerCase().replace(/\s+/g, '-')}`, profile.title)
        break
      case 'ls':
        out.push(allFiles.map((f) => f.name).join('   '))
        break
      case 'cat':
      case 'open': {
        const file = findFile(arg)
        if (file) {
          out.push(`opening ${file.name} ...`)
          onOpenFile(file.id)
        } else {
          out.push(`cat: ${arg || '(no file given)'}: No such file. Try 'ls'.`)
        }
        break
      }
      case 'contact':
        out.push('opening contact.js ...')
        onOpenFile('contact')
        break
      case 'clear':
        setLines([])
        return
      default:
        out.push(`command not found: ${word}. Type 'help' for options.`)
    }
    setLines((l) => [...l, ...out])
  }

  return (
    <div className="h-56 shrink-0 bg-panel border-t border-line flex flex-col">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-line text-[12px] text-muted">
        <span>TERMINAL — bash</span>
        <button onClick={onClose} aria-label="Close terminal" className="hover:text-ink">
          <X size={14} />
        </button>
      </div>
      <div
        className="flex-1 overflow-y-auto px-3 py-2 text-[13px] leading-relaxed cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap text-ink/90">
            {l}
          </div>
        ))}
        <div className="flex items-center gap-2 text-green">
          <span>kevin@lagos:~/portfolio$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                run(input)
                setInput('')
              }
            }}
            className="flex-1 bg-transparent outline-none text-ink"
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="w-2 h-4 bg-ink animate-blink" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
