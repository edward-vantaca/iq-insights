export type InsightId = 'ar' | 'ap' | 'rev'

export type ChartSegment = {
  label: string
  pct: number
  color: string
  dark: boolean
}

export type InsightRow = {
  id: string
  name: string
  meta: string
  loss: string
}

export type Insight = {
  id: InsightId
  category: string
  accent: string
  date: string
  dateLabel: string
  short: string
  status: 'active' | 'earlier'
  figure: string
  figureSuffix: string
  headline: string
  hero: string
  cta: string
  chartLabel: string
  chart: ChartSegment[]
  benchmark: string
  delta: string
  narrative: string
  rankLabel: string
  rows: InsightRow[]
  nudge: string
  placeholder: string
  suggestions: string[]
  mockA: string
}

export type ChatMessage = {
  q: string
  a: string | null
}
