import { experience } from '../data/cv'

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 text-[13px] sm:text-[14px] font-normal">
      <div className="text-ink">{'['}</div>
      {experience.map((job, i) => (
        <div key={i} className="pl-4 mb-4">
          <div className="text-ink">{'{'}</div>
          <div className="pl-4">
            <div>
              <span className="text-peach">"role"</span>: <span className="text-green">"{job.role}"</span>,
            </div>
            <div>
              <span className="text-peach">"organisation"</span>: <span className="text-green">"{job.org}"</span>,
            </div>
            <div>
              <span className="text-peach">"period"</span>: <span className="text-yellow">"{job.period}"</span>,
            </div>
            <div>
              <span className="text-peach">"highlights"</span>: [
            </div>
            {job.points.map((p, j) => (
              <div key={j} className="pl-4 text-ink/90 leading-relaxed">
                <span className="text-green">"{p}"</span>
                {j < job.points.length - 1 ? ',' : ''}
              </div>
            ))}
            <div className="pl-0">]</div>
          </div>
          <div className="text-ink">{'}'}{i < experience.length - 1 ? ',' : ''}</div>
        </div>
      ))}
      <div className="text-ink">{']'}</div>
    </div>
  )
}
