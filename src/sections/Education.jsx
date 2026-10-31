import { education } from '../data/cv'

export default function Education() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 text-[13px] sm:text-[14px]">
      <div className="text-mauve mb-2">education:</div>
      {education.map((e, i) => (
        <div key={i} className="pl-4 mb-4 border-l-2 border-line">
          <div className="pl-3">
            <span className="text-peach">program</span>: <span className="text-green">"{e.program}"</span>
          </div>
          <div className="pl-3">
            <span className="text-peach">school</span>: <span className="text-green">"{e.school}"</span>
          </div>
          <div className="pl-3">
            <span className="text-peach">completed</span>: <span className="text-yellow">"{e.date}"</span>
          </div>
        </div>
      ))}
    </div>
  )
}
