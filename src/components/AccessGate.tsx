import { useState } from 'react'
import BrandLight from '../assets/vantaca-iq-light.png'
import BrandDark from '../assets/vantaca-iq-dark.png'

const SESSION_KEY = 'iq_playground_unlocked'
const ACCESS_CODE = import.meta.env.VITE_ACCESS_CODE as string

function isUnlocked() {
  return sessionStorage.getItem(SESSION_KEY) === 'true'
}

type Props = {
  children: React.ReactNode
}

export default function AccessGate({ children }: Props) {
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return <>{children}</>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code === ACCESS_CODE) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setCode('')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-color-stage">
      <div className="w-full max-w-sm rounded-2xl border border-color-hr bg-color-card p-8 shadow-lg">
        <div className="mb-8 flex justify-center">
          <span className="light-only">
            <img src={BrandLight} alt="Vantaca IQ" className="h-auto w-36" />
          </span>
          <span className="dark-only">
            <img src={BrandDark} alt="Vantaca IQ" className="h-auto w-36" />
          </span>
        </div>

        <p className="mb-6 text-center text-sm text-color-p">
          Enter the access code to continue.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(false) }}
            placeholder="Access code"
            autoFocus
            className="w-full rounded-lg border border-color-hr bg-color-cell px-4 py-2.5 text-sm text-color-h1 placeholder-color-p focus:border-color-active focus:outline-none focus:ring-0"
          />
          {error && (
            <p className="text-xs text-color-danger">Incorrect code. Try again.</p>
          )}
          <button
            type="submit"
            className="rounded-lg bg-color-active py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
