import { useEffect, useState } from 'react'
import { profile } from '../data/cv'

const BOOT_LINES = [
  'booting kevin-nduka/portfolio ...',
  'mounting /experience /projects /skills ...',
  `whoami -> ${profile.name}`,
  `role    -> ${profile.title}`,
  'starting editor session...',
]

export default function BootScreen({ onDone }) {
  const [visible, setVisible] = useState([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setVisible(BOOT_LINES.slice(0, i))
      if (i >= BOOT_LINES.length) {
        clearInterval(interval)
        setTimeout(onDone, 500)
      }
    }, 350)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div className="fixed inset-0 bg-base text-green flex items-center justify-center z-50 px-6">
      <div className="w-full max-w-lg text-[13px] sm:text-sm">
        {visible.map((line, i) => (
          <div key={i} className="mb-1">
            {line}
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-green animate-blink align-middle" />
      </div>
    </div>
  )
}
