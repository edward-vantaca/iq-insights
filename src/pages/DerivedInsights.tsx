import { useState, useCallback } from 'react'
import { insights as allInsights } from '../data/insights'
import type { Insight } from '../types/insight'
import InsightRail from '../components/InsightRail/InsightRail'
import InsightHero from '../components/InsightStage/InsightHero'
import InsightEvidence from '../components/InsightStage/InsightEvidence'
import InsightConversation from '../components/InsightStage/InsightConversation'
import Toast from '../components/Toast'

export default function DerivedInsights() {
  const [activeId, setActiveId] = useState('ar')
  const [selected, setSelected] = useState<Set<string>>(new Set(['harborview']))
  const [toast, setToast] = useState<string | null>(null)

  const current = allInsights.find((i) => i.id === activeId) as Insight

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2600)
  }, [])

  const selectInsight = useCallback((id: string) => {
    const insight = allInsights.find((i) => i.id === id)!
    setActiveId(id)
    setSelected(new Set([insight.rows[0].id]))
  }, [])

  const toggleRow = useCallback((rowId: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(rowId)) next.delete(rowId)
      else next.add(rowId)
      return next
    })
  }, [])

  const handleSelectAll = useCallback(() => {
    const allIds = current.rows.map((r) => r.id)
    setSelected((prev) =>
      prev.size === allIds.length ? new Set() : new Set(allIds),
    )
  }, [current])

  const handleNudge = useCallback(() => {
    if (selected.size === 0) return
    const n = selected.size
    const noun = current.id === 'ap' ? 'vendor' : 'association'
    showToast(`${current.nudge} sent to ${n} ${noun}${n > 1 ? 's' : ''}.`)
  }, [selected, current, showToast])

  const handleCta = useCallback(() => {
    showToast(`Opening: ${current.cta}`)
  }, [current, showToast])

  return (
    <div className="flex overflow-hidden bg-color-stage" style={{ height: 'calc(100vh - 64px)' }}>
      <InsightRail
        insights={allInsights}
        activeId={activeId}
        onSelect={selectInsight}
      />

      {/* Stage — keyed on activeId so it remounts + re-animates on switch */}
      <div key={activeId} className="anim-fade-up flex-1 overflow-y-auto">
        <InsightHero insight={current} onCta={handleCta} />
        <InsightEvidence
          insight={current}
          selected={selected}
          onToggle={toggleRow}
          onSelectAll={handleSelectAll}
          onNudge={handleNudge}
        />
        <InsightConversation insight={current} />
      </div>

      {toast && <Toast message={toast} />}
    </div>
  )
}
