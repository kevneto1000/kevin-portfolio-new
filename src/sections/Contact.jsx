import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, XCircle } from 'lucide-react'
import { profile } from '../data/cv'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Field({ label, name, type = 'text', textarea = false, value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-[13px] text-peach mb-1">
        <span className="text-blue">const</span> {label} ={' '}
        <span className="text-muted">// required</span>
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required
          rows={5}
          value={value}
          onChange={onChange}
          className="w-full bg-elevated border border-line rounded px-3 py-2 text-ink text-[14px] outline-none focus:border-blue resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          value={value}
          onChange={onChange}
          className="w-full bg-elevated border border-line rounded px-3 py-2 text-ink text-[14px] outline-none focus:border-blue"
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const configured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!configured) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 text-[14px]">
      <div className="text-muted mb-4">
        <span className="text-mauve">function</span> <span className="text-blue">sendMessage</span>
        (name, email, message) {'{'}
      </div>

      <form onSubmit={handleSubmit} className="pl-4">
        <Field label="name" name="name" value={form.name} onChange={handleChange} />
        <Field label="email" name="email" type="email" value={form.email} onChange={handleChange} />
        <Field label="message" name="message" textarea value={form.message} onChange={handleChange} />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex items-center gap-2 bg-blue text-[#1e1e2e] font-semibold px-4 py-2 rounded hover:opacity-90 disabled:opacity-60 transition-opacity"
        >
          <Send size={15} />
          {status === 'sending' ? 'sending()...' : 'run send()'}
        </button>

        {status === 'sent' && (
          <div className="flex items-center gap-2 text-green mt-3">
            <CheckCircle2 size={16} /> Message sent — thanks, I'll reply soon.
          </div>
        )}
        {status === 'error' && !configured && (
          <div className="flex items-center gap-2 text-red mt-3 text-[13px]">
            <XCircle size={16} /> EmailJS isn't configured yet — add your keys to .env (see README).
          </div>
        )}
        {status === 'error' && configured && (
          <div className="flex items-center gap-2 text-red mt-3 text-[13px]">
            <XCircle size={16} /> Something went wrong sending that. Try again, or email {profile.email} directly.
          </div>
        )}
      </form>

      <div className="text-muted mt-2">{'}'}</div>
    </div>
  )
}
