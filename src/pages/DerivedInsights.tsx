import { useState, useCallback, useMemo, useEffect } from 'react'
import { insightsByClient } from '../data/insights'
import { useClient } from '../context/ClientContext'
import type { Insight } from '../types/insight'
import InsightRail from '../components/InsightRail/InsightRail'
import InsightHero from '../components/InsightStage/InsightHero'
import InsightEvidence from '../components/InsightStage/InsightEvidence'
import InsightConversation from '../components/InsightStage/InsightConversation'
import Toast from '../components/Toast'

export default function DerivedInsights() {
  const { client } = useClient()
  const clientInsights = useMemo(
    () => insightsByClient[client.id] ?? [],
    [client.id],
  )

  const [activeId, setActiveId] = useState<string>(clientInsights[0]?.id ?? 'ar')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [toast, setToast] = useState<string | null>(null)

  // No client has all three insights, so the active one often does not survive
  // a client switch. Fall back to that client's first insight.
  const current =
    (clientInsights.find((i) => i.id === activeId) as Insight | undefined) ??
    clientInsights[0]

  useEffect(() => {
    if (!current) return
    if (current.id !== activeId) setActiveId(current.id)
    setSelected(new Set(current.rows?.[0] ? [current.rows[0].id] : []))
  }, [client.id, current?.id])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2600)
  }, [])

  const selectInsight = useCallback(
    (id: string) => {
      const insight = clientInsights.find((i) => i.id === id)
      if (!insight) return
      setActiveId(id)
      setSelected(new Set(insight.rows?.[0] ? [insight.rows[0].id] : []))
    },
    [clientInsights],
  )

  const toggleRow = useCallback((rowId: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(rowId)) next.delete(rowId)
      else next.add(rowId)
      return next
    })
  }, [])

  const handleSelectAll = useCallback(() => {
    const allIds = (current?.rows ?? []).map((r) => r.id)
    setSelected((prev) =>
      prev.size === allIds.length ? new Set() : new Set(allIds),
    )
  }, [current])

  const handleNudge = useCallback(() => {
    if (!current || selected.size === 0) return
    const n = selected.size
    const noun = current.id === 'ap' ? 'step' : 'association'
    showToast(`${current.nudge} sent to ${n} ${noun}${n > 1 ? 's' : ''}.`)
  }, [selected, current, showToast])

  const handleCta = useCallback(() => {
    if (!current) return
    showToast(`Opening: ${current.cta}`)
  }, [current, showToast])

  if (!current) {
    return (
      <div
        className="flex items-center justify-center bg-color-stage px-8 text-sm text-color-p"
        style={{ height: 'calc(100vh - 64px)' }}
      >
        No insight packages for {client.name} yet.
      </div>
    )
  }

  return (
    <div className="flex overflow-hidden bg-color-stage" style={{ height: 'calc(100vh - 64px)' }}>
      <InsightRail
        insights={clientInsights}
        activeId={current.id}
        onSelect={selectInsight}
        clientName={client.name}
      />

      {/* Stage - keyed on client+insight so it remounts and re-animates */}
      <div key={`${client.id}-${current.id}`} className="anim-fade-up flex-1 overflow-y-auto">
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
