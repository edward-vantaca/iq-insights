import type { Insight } from '../../types/insight'
import InsightRailItem from './InsightRailItem'

type Props = {
  insights: Insight[]
  activeId: string
  onSelect: (id: string) => void
  clientName: string
}

export default function InsightRail({
  insights,
  activeId,
  onSelect,
  clientName,
}: Props) {
  return (
    <div
      className="flex w-[280px] flex-shrink-0 flex-col overflow-y-auto border-r border-color-hr bg-color-card px-5 py-6"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <p className="text-sm font-semibold text-color-h2">Insights</p>
      <p className="mb-3.5 mt-0.5 truncate text-xs text-color-p" title={clientName}>
        {clientName}
      </p>

      <div className="flex flex-col gap-1.5">
        {insights.map((insight) => (
          <InsightRailItem
            key={insight.id}
            insight={insight}
            isActive={insight.id === activeId}
            onClick={() => onSelect(insight.id)}
          />
        ))}
      </div>

    </div>
  )
}
