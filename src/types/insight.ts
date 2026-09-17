export type InsightId = 'ar' | 'ap' | 'rev'

export type ClientId =
  | 'jea'
  | 'essex'
  | 'lighthouse'
  | 'hoaorg'
  | 'trust'
  | 'greenacre'
  | 'beacon'
  | 'access'

export type Client = {
  id: ClientId
  name: string
  short: string
  /** Which insight packages this client actually has. Drives the rail. */
  insights: InsightId[]
}

/**
 * Where a card's numbers came from. AR is computed from production Databricks
 * tables; AP and Revenue Manager have no pipeline yet and come from the static
 * insight packages. The card says which, so nobody compares them as equals.
 */
export type DataSource = 'real' | 'illustrative'

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
  rankLabel?: string
  /** Absent when the package has no row-level data (AP, Revenue Manager). */
  rows?: InsightRow[]
  nudge: string
  placeholder: string
  suggestions: string[]
  mockA: string
  dataSource: DataSource
  sourceNote: string
}

export type ChatMessage = {
  q: string
  a: string | null
}
