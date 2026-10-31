import { ExternalLink } from 'lucide-react'

export default function ProjectFile({ project }) {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 text-[14px] sm:text-[15px]">
      <div className="text-mauve text-lg font-semibold mb-1"># {project.name}</div>
      <div className="text-muted italic mb-4">{project.tagline}</div>

      <p className="text-ink/90 leading-relaxed mb-4">{project.description}</p>

      <div className="mb-4">
        <div className="text-peach mb-1">## Stack</div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s, i) => (
            <span key={i} className="px-2 py-0.5 rounded bg-elevated border border-line text-[12px] text-green">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="text-peach mb-1">## Link</div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-blue hover:underline"
        >
          {project.linkLabel} <ExternalLink size={13} />
        </a>
      </div>
    </div>
  )
}
