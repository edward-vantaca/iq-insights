import type { ChartSegment } from '../../types/insight'

type Props = {
  chart: ChartSegment[]
  benchmark: string
  delta: string
}

export default function PaymentMixChart({ chart, benchmark, delta }: Props) {
  return (
    <div>
      {/* Animated ribbon bar */}
      <div className="flex h-3.5 overflow-hidden rounded-full bg-color-hr">
        {chart.map((seg, i) => (
          <div
            key={i}
            className="bar-grow"
            style={{
              width: `${seg.pct}%`,
              background: seg.color,
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Legend grid */}
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
        {chart.map((seg, i) => (
          <div key={i} className="flex items-baseline gap-2.5">
            <div
              className="h-2.5 w-2.5 flex-shrink-0 translate-y-px rounded-sm"
              style={{ background: seg.color }}
            />
            <div className="min-w-0 flex-1 truncate text-[13px] text-color-h2">
              {seg.label}
            </div>
            <div className="tabular-nums text-sm font-semibold text-color-h1">
              {seg.pct}%
            </div>
          </div>
        ))}
      </div>

      {/* Benchmark + delta */}
      <div className="mt-3.5 flex gap-6 text-xs text-color-p">
        <span>
          Peer benchmark: <span className="text-color-h2">{benchmark}</span>
        </span>
        <span>
          Δ <span className="text-color-h1">{delta}</span>
        </span>
      </div>
    </div>
  )
}
