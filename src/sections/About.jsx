import { profile } from '../data/cv'
import { Github, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 text-[14px] sm:text-[15px]">
      <div className="text-muted mb-4">
        <span className="text-mauve">import</span> {'{ Developer }'} <span className="text-mauve">from</span>{' '}
        <span className="text-green">'./life'</span>
      </div>

      <div className="rounded-lg overflow-hidden border border-line mb-8 bg-panel">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line bg-elevated">
          <span className="w-2.5 h-2.5 rounded-full bg-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow" />
          <span className="w-2.5 h-2.5 rounded-full bg-green" />
          <span className="ml-3 text-[11px] text-muted">kevin-at-work.jpeg — preview</span>
        </div>
        <img
          src="/kevin-at-work.jpeg"
          alt="Kevin Nduka coding at his desk"
          className="w-full max-h-80 object-cover object-top"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
        <img
          src="/kevin-headshot.png"
          alt={profile.name}
          className="w-28 h-28 rounded-lg border border-line object-cover shrink-0"
        />
        <div>
          <div className="text-mauve">
            <span className="text-blue">const</span> profile ={' '}
            <span className="text-ink">{'{'}</span>
          </div>
          <div className="pl-4">
            <div>
              <span className="text-peach">name</span>: <span className="text-green">'{profile.name}'</span>,
            </div>
            <div>
              <span className="text-peach">title</span>: <span className="text-green">'{profile.title}'</span>,
            </div>
            <div>
              <span className="text-peach">location</span>: <span className="text-green">'{profile.location}'</span>,
            </div>
          </div>
          <div className="text-ink">{'}'}</div>
        </div>
      </div>

      <div className="mb-2 text-muted">{'/**'}</div>
      <p className="text-ink/90 leading-relaxed border-l-2 border-line pl-4 mb-2">{profile.summary}</p>
      <div className="mb-8 text-muted">{' */'}</div>

      <div className="flex flex-wrap gap-4 text-[13px]">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-ink hover:text-blue">
          <Mail size={15} /> {profile.email}
        </a>
        <span className="flex items-center gap-2 text-ink">
          <Phone size={15} /> {profile.phone}
        </span>
        <span className="flex items-center gap-2 text-ink">
          <MapPin size={15} /> {profile.location}
        </span>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink hover:text-blue">
          <Github size={15} /> GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink hover:text-blue">
          <Linkedin size={15} /> LinkedIn
        </a>
        <a href={profile.links.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink hover:text-blue">
          <Globe size={15} /> Portfolio
        </a>
      </div>
    </div>
  )
}
