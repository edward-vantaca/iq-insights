import type { ReactNode } from 'react'

type Props = {
  title: string
  colSpan?: boolean
  children: ReactNode
}

export default function WidgetCard({ title, colSpan, children }: Props) {
  return (
    <div className={colSpan ? 'xl:col-span-2' : ''}>
      <div className="rounded-xl border border-color-hr bg-color-card shadow-sm">
        <div className="flex items-center border-b border-color-hr px-5 py-4">
          <h3 className="text-sm font-semibold text-color-h1">{title}</h3>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
