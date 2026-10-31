import { skills, softSkills } from '../data/cv'

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 text-[13px] sm:text-[14px]">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="mb-6">
          <div>
            <span className="text-mauve">.{group.toLowerCase().replace(/\s+/g, '-')}</span> {'{'}
          </div>
          <div className="pl-4">
            {items.map((item, i) => (
              <div key={i}>
                <span className="text-peach">stack</span>: <span className="text-green">"{item}"</span>;
              </div>
            ))}
          </div>
          <div>{'}'}</div>
        </div>
      ))}

      <div className="mb-2">
        <span className="text-mauve">.soft-skills</span> {'{'}
      </div>
      <div className="pl-4 flex flex-wrap gap-x-2">
        {softSkills.map((s, i) => (
          <span key={i}>
            <span className="text-peach">trait</span>: <span className="text-green">"{s}"</span>;
          </span>
        ))}
      </div>
      <div>{'}'}</div>
    </div>
  )
}
