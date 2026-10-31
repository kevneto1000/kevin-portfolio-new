// Central registry: sidebar file tree + tab metadata.
// Each entry's `id` is used for tabs, active state, and the status bar language mode.

export const rootFiles = [
  { id: 'about', name: 'about.jsx', lang: 'JSX', color: 'text-blue' },
  { id: 'experience', name: 'experience.json', lang: 'JSON', color: 'text-yellow' },
  { id: 'skills', name: 'skills.css', lang: 'CSS', color: 'text-mauve' },
  { id: 'education', name: 'education.yml', lang: 'YAML', color: 'text-peach' },
  { id: 'contact', name: 'contact.js', lang: 'JavaScript', color: 'text-green' },
]

export const projectFiles = [
  { id: 'project-food-dash', name: 'food-dash.md', lang: 'Markdown', color: 'text-ink' },
  { id: 'project-pulse-backend', name: 'pulse-backend.md', lang: 'Markdown', color: 'text-ink' },
]

export const allFiles = [...rootFiles, ...projectFiles]

export function fileMeta(id) {
  return allFiles.find((f) => f.id === id)
}
