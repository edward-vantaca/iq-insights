import type { InsightRow } from '../../types/insight'

type Props = {
  rows: InsightRow[]
  selected: Set<string>
  accent: string
  rankLabel: string
  nudgeLabel: string
  selectAllLabel: string
  perMonth: boolean
  onToggle: (id: string) => void
  onSelectAll: () => void
  onNudge: () => void
}

export default function RankedTable({
  rows,
  selected,
  accent,
  rankLabel,
  nudgeLabel,
  selectAllLabel,
  perMonth,
  onToggle,
  onSelectAll,
  onNudge,
}: Props) {
  const nudgeDisabled = selected.size === 0

  return (
    <div>
      {/* Header */}
      <div className="mb-3 flex items-center gap-2.5">
        <p className="text-sm font-semibold text-color-h2">
          {rankLabel}
        </p>
        <div className="flex-1" />
        <span className="text-[11px] text-color-muted2">
          {selected.size} selected
        </span>
      </div>

      {/* Rows */}
      <div className="overflow-hidden rounded-[10px] border border-color-hr shadow">
        {rows.map((row, i) => {
          const checked = selected.has(row.id)
          const isLast = i === rows.length - 1
          return (
            <button
              key={row.id}
              onClick={() => onToggle(row.id)}
              role="checkbox"
              aria-checked={checked}
              className="flex w-full items-center gap-3 px-3.5 py-3 text-left transition-colors"
              style={{
                background: checked
                  ? 'var(--iq-active-nav-bg-color)'
                  : 'var(--iq-card-color)',
                borderBottom: isLast
                  ? 'none'
                  : '1px solid var(--iq-border-color)',
              }}
            >
              {/* Checkbox */}
              <div
                className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded text-[11px] font-bold"
                style={{
                  border: checked
                    ? `1px solid ${accent}`
                    : '1px solid var(--iq-border-color)',
                  background: checked ? accent : 'transparent',
                  color: 'var(--iq-card-color)',
                }}
              >
                {checked ? '✓' : ''}
              </div>

              {/* Name + meta */}
              <div className="min-w-0 flex-1">
                <div className="text-[13px] text-color-h1">{row.name}</div>
                <div className="text-[11px] text-color-muted2">{row.meta}</div>
              </div>

              {/* Loss */}
              <div className="text-sm font-semibold text-color-h1">
                −{row.loss}
                {perMonth && (
                  <span className="text-[11px] font-normal text-color-muted2">
                    /mo
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Actions */}
      <div className="mt-3.5 flex justify-end gap-2.5">
        <button
          onClick={onSelectAll}
          className="rounded-lg border border-color-hr bg-transparent px-3.5 py-2.5 text-xs text-color-p transition-colors hover:border-color-stage-border hover:text-color-h2"
        >
          {selectAllLabel}
        </button>
        <button
          onClick={onNudge}
          disabled={nudgeDisabled}
          className="rounded-lg border border-color-active px-4 py-2.5 text-[13px] font-semibold transition-all"
          style={{
            background: nudgeDisabled ? 'transparent' : 'var(--iq-active-color)',
            color: nudgeDisabled ? 'var(--iq-active-color)' : '#fff',
            opacity: nudgeDisabled ? 0.5 : 1,
            cursor: nudgeDisabled ? 'default' : 'pointer',
          }}
        >
          {nudgeLabel} {!nudgeDisabled && '→'}
        </button>
      </div>
    </div>
  )
}
