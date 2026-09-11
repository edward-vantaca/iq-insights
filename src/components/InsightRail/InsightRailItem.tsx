import type { Insight } from '../../types/insight'

type Props = {
  insight: Insight
  isActive: boolean
  onClick: () => void
}

export default function InsightRailItem({ insight, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg p-3 text-left transition-colors hover:bg-color-cell"
      style={{ background: isActive ? 'var(--iq-cell-color)' : 'transparent' }}
    >
      <div className="mb-1.5 flex items-center gap-2">
        {isActive && (
          <div
            className="di-pulse h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ background: insight.accent }}
          />
        )}
        <span
          className="text-[11px] font-semibold uppercase tracking-[.05em]"
          style={{ color: isActive ? insight.accent : 'var(--iq-muted2-color)' }}
        >
          {insight.category}
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span
          className="font-bold leading-none"
          style={{
            fontSize: isActive ? 20 : 16,
            color: isActive ? 'var(--iq-h1-color)' : 'var(--iq-h2-color)',
          }}
        >
          {insight.short}
        </span>
        {insight.figureSuffix && (
          <span className="text-xs font-medium text-color-muted2">
            {insight.figureSuffix}
          </span>
        )}
      </div>
      <div className="mt-0.5 text-[11px] text-color-p">
        {isActive ? 'Active · ' : ''}
        {insight.dateLabel}
      </div>
    </button>
  )
}
