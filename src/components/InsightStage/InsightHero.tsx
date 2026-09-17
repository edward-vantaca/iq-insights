import type { Insight } from '../../types/insight'

type Props = {
  insight: Insight
  onCta: () => void
}

export default function InsightHero({ insight, onCta }: Props) {
  return (
    <div className="px-16 pb-10 pt-14" style={{ background: insight.hero }}>
      {/* Category chip + date + actions */}
      <div className="mb-5 flex items-center gap-2.5">
        <div
          className="rounded px-2.5 py-1 text-[11px] font-semibold tracking-[.06em]"
          style={{ background: 'var(--iq-infobox-color)', color: insight.accent }}
        >
          {insight.category.toUpperCase()}
        </div>
        <div className="text-xs text-color-p">
          Financial briefing · {insight.date}
        </div>
        {/* One chip on every card. Some figures are real and some are not,
            but the distinction is not a viewer's problem to reason about. */}
        <div
          className="rounded px-2.5 py-1 text-[11px] font-semibold tracking-[.06em]"
          style={{ background: 'rgba(242,184,102,.16)', color: '#a6702a' }}
          title={insight.sourceNote}
        >
          PROTOTYPE · ILLUSTRATIVE
        </div>
        <div className="flex-1" />
        <button className="rounded-md border border-color-stage-border bg-color-card px-3 py-1.5 text-[11px] text-color-h2 shadow-sm transition-colors hover:border-color-h2">
          Share
        </button>
        <button className="rounded-md border border-color-stage-border bg-color-card px-3 py-1.5 text-[11px] text-color-h2 shadow-sm transition-colors hover:border-color-h2">
          Snooze
        </button>
      </div>

      {/* Big figure */}
      <div
        className="font-extrabold leading-[.95] text-color-h1"
        style={{ fontSize: 72, letterSpacing: '-.04em' }}
      >
        {insight.figure}
        <span className="font-medium text-color-p" style={{ fontSize: 28 }}>
          {insight.figureSuffix}
        </span>
      </div>

      {/* Headline */}
      <div
        className="mt-5 max-w-[820px] leading-[1.45] text-color-h2"
        style={{ fontSize: 22 }}
      >
        {insight.headline}
      </div>

      <div className="mt-2.5 max-w-[820px] text-[12px] text-color-muted2">
        {insight.sourceNote}
      </div>

      {/* CTA row */}
      <div className="mt-8 flex items-center gap-3.5">
        <button
          onClick={onCta}
          className="rounded-[10px] bg-color-active px-5 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          {insight.cta} →
        </button>
        <div className="text-[13px] text-color-p">
          or scroll for the breakdown
        </div>
      </div>

      {/* Evidence marker */}
      <div className="mt-11 text-[11px] tracking-[.15em] text-color-p">
        ▼ EVIDENCE
      </div>
    </div>
  )
}
