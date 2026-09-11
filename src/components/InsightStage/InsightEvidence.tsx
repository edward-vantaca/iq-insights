import type { Insight } from '../../types/insight'
import PaymentMixChart from './PaymentMixChart'
import RankedTable from './RankedTable'

type Props = {
  insight: Insight
  selected: Set<string>
  onToggle: (id: string) => void
  onSelectAll: () => void
  onNudge: () => void
}

export default function InsightEvidence({
  insight,
  selected,
  onToggle,
  onSelectAll,
  onNudge,
}: Props) {
  const selCount = selected.size
  const nudgeLabel =
    selCount === 0 ? 'Select rows to act' : `${insight.nudge} (${selCount})`
  const selectAllLabel =
    selCount === insight.rows.length ? 'Clear' : 'Select all'

  return (
    <div className="border-t border-color-hr bg-color-card px-16 py-12">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {/* Chart card */}
        <div>
          <p className="mb-2 text-sm font-semibold text-color-h2">{insight.chartLabel}</p>
          <div className="rounded-xl border border-color-hr bg-color-card p-6 shadow">
            <PaymentMixChart
              chart={insight.chart}
              benchmark={insight.benchmark}
              delta={insight.delta}
            />
            <div
              className="mt-5 text-sm leading-[1.65] text-color-p"
              dangerouslySetInnerHTML={{ __html: insight.narrative }}
            />
          </div>
        </div>

        {/* Ranked table card */}
        <RankedTable
          rows={insight.rows}
          selected={selected}
          accent={insight.accent}
          rankLabel={insight.rankLabel}
          nudgeLabel={nudgeLabel}
          selectAllLabel={selectAllLabel}
          perMonth={insight.id !== 'ap'}
          onToggle={onToggle}
          onSelectAll={onSelectAll}
          onNudge={onNudge}
        />
      </div>
    </div>
  )
}
