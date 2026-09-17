import type { ClientId, Insight } from '../types/insight'

/**
 * AR figures are computed from production Databricks tables
 * (prd_iq_eus_dbw.iq_insights) for July 2026 and are real.
 *
 * AP and Revenue Manager have no pipeline yet, so those cards carry the figures
 * from the July 2026 insight packages. Each card states which it is via
 * dataSource, because a reader cannot otherwise tell them apart.
 */

const AR_ACCENT = '#4aa3ff'
const AP_ACCENT = '#f2b866'
const REV_ACCENT = '#a78bfa'

const AR_HERO = 'linear-gradient(135deg, rgba(74,163,255,.10), transparent 60%)'
const AP_HERO = 'linear-gradient(135deg, rgba(242,184,102,.10), transparent 60%)'
const REV_HERO = 'linear-gradient(135deg, rgba(167,139,250,.10), transparent 60%)'

const AR_SOURCE = 'Prototype view. Based on your July 2026 payment data.'
const PKG_SOURCE = 'Prototype view. Sample figures shown for demonstration.'

export const insightsByClient: Record<ClientId, Insight[]> = {
  /* ------------------------------------------------------------------ JEA */
  jea: [
    {
      id: 'ar',
      category: 'Accounts Receivable',
      accent: AR_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$57.9K',
      status: 'active',
      figure: '$57,890',
      figureSuffix: '/mo',
      headline:
        'in additional revenue share if the 62.1% of collections still arriving by check moved to VantacaPay.',
      hero: AR_HERO,
      cta: 'Open VantacaPay adoption workflow',
      chartLabel: 'Payment method mix, July 2026',
      chart: [
        { label: 'VantacaPay', pct: 30.5, color: AR_ACCENT, dark: true },
        { label: 'Check', pct: 62.1, color: '#8892a6', dark: true },
        { label: 'ACH', pct: 7.2, color: '#3d4759', dark: false },
        { label: 'Other', pct: 0.2, color: '#5b6478', dark: false },
      ],
      benchmark: '21.0% VantacaPay',
      delta: '+9.5 pts',
      narrative:
        '<b style="color:var(--iq-h1-color);">30.5%</b> of collections flow through VantacaPay &mdash; <b style="color:var(--iq-h1-color);">9.5 pts above</b> the 21.0% median for Large portfolios. $14.8M still arrives outside VantacaPay each month; at your blended 0.39% take rate that is the opportunity above. Revenue share earned in July was $25,359.',
      rankLabel: 'Largest opportunities by dollars outside VantacaPay',
      rows: [
        { id: 'quadomain', name: 'Quadomain Condominium Association, Inc.', meta: '403 units · VantacaPay 10.8%', loss: '$908,436' },
        { id: 'kingspoint', name: 'Kings Point In Tamarac, Inc.', meta: '4,869 units · VantacaPay 8.3%', loss: '$902,556' },
        { id: 'platina', name: 'Platina Community Master Assoc., Inc. zzz', meta: 'units not recorded · VantacaPay 25.0%', loss: '$901,383' },
        { id: 'the2000', name: 'The 2000 Condominium Association, Inc.', meta: '141 units · VantacaPay 20.7%', loss: '$762,850' },
      ],
      nudge: 'Send adoption nudge',
      placeholder: 'e.g. Which associations have the lowest VantacaPay adoption?',
      suggestions: [
        'How has adoption changed month by month?',
        'How do we compare with our peers?',
        'Which associations are furthest below our average?',
      ],
      mockA:
        'Quadomain and Kings Point together account for $1.81M of the $14.8M arriving outside VantacaPay. Both sit below 11% adoption against a portfolio average of 30.5%.',
      dataSource: 'real',
      sourceNote: AR_SOURCE,
    },
    {
      id: 'rev',
      category: 'Revenue Manager',
      accent: REV_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$54.7K',
      status: 'earlier',
      figure: '$54,720',
      figureSuffix: '/mo',
      headline:
        'in uncaptured admin fees — 120 of your 136 associations have no admin fee contract at all.',
      hero: REV_HERO,
      cta: 'Open admin-fee rules',
      chartLabel: 'Associations by admin fee contract',
      chart: [
        { label: 'With contract', pct: 12, color: REV_ACCENT, dark: true },
        { label: 'No admin fee contract', pct: 88, color: '#3d4759', dark: false },
      ],
      benchmark: '$456/association/mo',
      delta: '$657K/yr',
      narrative:
        '<b style="color:var(--iq-h1-color);">88%</b> of associations have no admin fee contract. You currently have zero associations generating admin fees, so the full cost of administrative work is being absorbed. Other companies of your size generate $30K&ndash;$70K per month from these fees.',
      nudge: 'Enable default rules',
      placeholder: 'e.g. Which associations should we start with?',
      suggestions: [
        'What would a 20-association pilot recover?',
        'Which fee categories are most common?',
        'How long does rollout usually take?',
      ],
      mockA:
        'Starting with the 20 highest-activity associations would recover roughly $9,120/month, about 17% of the total gap, before any wider rollout.',
      dataSource: 'illustrative',
      sourceNote: PKG_SOURCE,
    },
  ],

  /* ---------------------------------------------------------------- Essex */
  essex: [
    {
      id: 'ar',
      category: 'Accounts Receivable',
      accent: AR_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$14.8K',
      status: 'active',
      figure: '$14,760',
      figureSuffix: '/mo',
      headline:
        'in additional revenue share — 76.6% of collections still arrive by check.',
      hero: AR_HERO,
      cta: 'Open VantacaPay adoption workflow',
      chartLabel: 'Payment method mix, July 2026',
      chart: [
        { label: 'VantacaPay', pct: 20.0, color: AR_ACCENT, dark: true },
        { label: 'Check', pct: 76.6, color: '#8892a6', dark: true },
        { label: 'ACH', pct: 2.1, color: '#3d4759', dark: false },
        { label: 'Other', pct: 1.3, color: '#5b6478', dark: false },
      ],
      benchmark: '21.0% VantacaPay',
      delta: '−1.0 pts',
      narrative:
        '<b style="color:var(--iq-h1-color);">20.0%</b> of collections flow through VantacaPay, essentially level with the 21.0% median for Large portfolios. $2.03M arrives outside VantacaPay each month; at your blended 0.73% take rate that is the opportunity above. Revenue share earned in July was $3,544.',
      rankLabel: 'Largest opportunities by dollars outside VantacaPay',
      rows: [
        { id: 'eaglemtn', name: 'The Resort at Eagle Mountain Lake HOA, Inc', meta: '648 units · VantacaPay 13.2%', loss: '$188,620' },
        { id: 'whitewing', name: 'Whitewing Trails Homeowner Association, Inc.', meta: '1,199 units · VantacaPay 23.3%', loss: '$165,470' },
        { id: 'hurricane', name: 'The Villages of Hurricane Creek HOA, Inc', meta: '1,128 units · VantacaPay 40.0%', loss: '$100,318' },
        { id: 'riverwalk', name: 'The Riverwalk at Central Park HOA, Inc', meta: '373 units · VantacaPay 8.1%', loss: '$86,100' },
      ],
      nudge: 'Send adoption nudge',
      placeholder: 'e.g. Which associations have the lowest VantacaPay adoption?',
      suggestions: [
        'How has adoption changed month by month?',
        'How do we compare with our peers?',
        'Which associations are furthest below our average?',
      ],
      mockA:
        'The Resort at Eagle Mountain Lake carries the largest single gap at $188,620 outside VantacaPay, on 13.2% adoption against a portfolio average of 20.0%.',
      dataSource: 'real',
      sourceNote: AR_SOURCE,
    },
  ],

  /* ----------------------------------------------------------- Lighthouse */
  lighthouse: [
    {
      id: 'ar',
      category: 'Accounts Receivable',
      accent: AR_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$4.8K',
      status: 'active',
      figure: '$4,801',
      figureSuffix: '/mo',
      headline:
        'in additional revenue share. You are well ahead of your peer group — this is a revenue case, not an adoption problem.',
      hero: AR_HERO,
      cta: 'Open VantacaPay adoption workflow',
      chartLabel: 'Payment method mix, July 2026',
      chart: [
        { label: 'VantacaPay', pct: 54.8, color: AR_ACCENT, dark: true },
        { label: 'Check', pct: 42.1, color: '#8892a6', dark: true },
        { label: 'ACH', pct: 3.1, color: '#3d4759', dark: false },
      ],
      benchmark: '23.2% VantacaPay',
      delta: '+31.6 pts',
      narrative:
        '<b style="color:var(--iq-h1-color);">54.8%</b> of collections flow through VantacaPay &mdash; <b style="color:var(--iq-h1-color);">31.6 pts above</b> the 23.2% median for Medium portfolios. $425K still arrives outside VantacaPay each month; at your blended 1.13% take rate that is the opportunity above. Revenue share earned in July was $5,833.',
      rankLabel: 'Largest opportunities by dollars outside VantacaPay',
      rows: [
        { id: 'bison', name: 'Bison Ranch Owners Association', meta: '412 units · VantacaPay 39.5%', loss: '$31,770' },
        { id: 'riata', name: 'Riata West Community Association', meta: '888 units · VantacaPay 59.1%', loss: '$29,439' },
        { id: 'reflections', name: 'Arizona Reflections Community Association', meta: '315 units · VantacaPay 52.0%', loss: '$23,967' },
        { id: 'deseo', name: 'Deseo Community Association', meta: '94 units · VantacaPay 0.0%', loss: '$23,255' },
      ],
      nudge: 'Send adoption nudge',
      placeholder: 'e.g. Which associations have the lowest VantacaPay adoption?',
      suggestions: [
        'How has adoption changed month by month?',
        'How do we compare with our peers?',
        'Which associations are furthest below our average?',
      ],
      mockA:
        'Deseo Community Association is the clearest outlier: 0% adoption against a portfolio average of 54.8%, with $23,255 arriving outside VantacaPay in July.',
      dataSource: 'real',
      sourceNote: AR_SOURCE,
    },
  ],

  /* ---------------------------------------------------------------- Trust */
  trust: [
    {
      id: 'ap',
      category: 'Accounts Payable',
      accent: AP_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$679K',
      status: 'active',
      figure: '$678,911',
      figureSuffix: '',
      headline:
        'in estimated late-payment penalties — 69% of July invoices were paid past their due date.',
      hero: AP_HERO,
      cta: 'Review invoice approval queue',
      chartLabel: 'Invoices by payment timing, July 2026',
      chart: [
        { label: 'Paid late', pct: 69, color: AP_ACCENT, dark: true },
        { label: 'Paid on time', pct: 31, color: '#3d4759', dark: false },
      ],
      benchmark: '29% late (platform)',
      delta: '+40 pts',
      narrative:
        '15,161 of 21,976 invoices were paid late, worth <b style="color:var(--iq-h1-color);">$33.9M</b> and averaging 21 days overdue. Processing takes 9 days 1 hour against a platform median of 4.5 &mdash; double. Every step is slow, so this is systemic rather than one bottleneck.',
      rankLabel: 'Processing steps by average duration',
      rows: [
        { id: 'board', name: 'Board Approval', meta: 'Approval step', loss: '4.9 days' },
        { id: 'manager', name: 'Manager Approval', meta: 'Approval step', loss: '4.4 days' },
        { id: 'boardready', name: 'Board to Ready', meta: 'Handoff', loss: '3.6 days' },
        { id: 'readypaid', name: 'Ready to Paid', meta: 'Payment run', loss: '2.1 days' },
      ],
      nudge: 'Escalate approvals',
      placeholder: 'e.g. Which step should we automate first?',
      suggestions: [
        'Which approvers are slowest?',
        'Show the 6-month late-payment trend',
        'What would cutting Board Approval in half save?',
      ],
      mockA:
        'Board and Manager Approval together account for 9.3 days of the pipeline, so they are effectively the whole of it. Halving both would bring processing near the 4.5-day platform median.',
      dataSource: 'illustrative',
      sourceNote: PKG_SOURCE,
    },
  ],

  /* ------------------------------------------------------- HOA Organizers */
  hoaorg: [
    {
      id: 'ap',
      category: 'Accounts Payable',
      accent: AP_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$35.9K',
      status: 'active',
      figure: '$35,917',
      figureSuffix: '',
      headline:
        'in estimated late-payment penalties — 66% of July invoices were paid past their due date.',
      hero: AP_HERO,
      cta: 'Review invoice approval queue',
      chartLabel: 'Invoices by payment timing, July 2026',
      chart: [
        { label: 'Paid late', pct: 66, color: AP_ACCENT, dark: true },
        { label: 'Paid on time', pct: 34, color: '#3d4759', dark: false },
      ],
      benchmark: '29% late (platform)',
      delta: '+37 pts',
      narrative:
        '924 of 1,404 invoices were paid late, worth <b style="color:var(--iq-h1-color);">$1.8M</b> and averaging 27 days overdue. Processing takes 3 days 1 hour &mdash; <b style="color:var(--iq-h1-color);">faster</b> than the 4.5-day platform median. Speed is not the problem: invoices are entering the system too close to their due dates.',
      rankLabel: 'Processing steps by average duration',
      rows: [
        { id: 'manager', name: 'Manager Approval', meta: 'Approval step', loss: '1.6 days' },
        { id: 'readypaid', name: 'Ready to Paid', meta: 'Payment run', loss: '0.4 days' },
      ],
      nudge: 'Escalate approvals',
      placeholder: 'e.g. Why are invoices arriving so late?',
      suggestions: [
        'Which vendors submit latest?',
        'Show the 6-month late-payment trend',
        'What would earlier vendor submission save?',
      ],
      mockA:
        'Processing is already below the platform median, so the intervention is upstream: getting vendors to submit earlier would move more than any approval change.',
      dataSource: 'illustrative',
      sourceNote: PKG_SOURCE,
    },
  ],

  /* ------------------------------------------------------------ Greenacre */
  greenacre: [
    {
      id: 'ap',
      category: 'Accounts Payable',
      accent: AP_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$6.0K',
      status: 'active',
      figure: '$6,000',
      figureSuffix: '',
      headline:
        'in estimated late-payment penalties — 47% of July invoices were paid past their due date.',
      hero: AP_HERO,
      cta: 'Review invoice approval queue',
      chartLabel: 'Invoices by payment timing, July 2026',
      chart: [
        { label: 'Paid late', pct: 47, color: AP_ACCENT, dark: true },
        { label: 'Paid on time', pct: 53, color: '#3d4759', dark: false },
      ],
      benchmark: '29% late (platform)',
      delta: '+18 pts',
      narrative:
        '140 of 296 invoices were paid late, worth <b style="color:var(--iq-h1-color);">$302K</b> and averaging 25 days overdue. Processing takes 6 days 19 hours against a 4.5-day median. Manager Approval is fast at 0.3 days &mdash; it is <b style="color:var(--iq-h1-color);">Board Approval at 6.2 days</b> that stalls everything.',
      rankLabel: 'Processing steps by average duration',
      rows: [
        { id: 'board', name: 'Board Approval', meta: 'Approval step', loss: '6.2 days' },
        { id: 'boardready', name: 'Board to Ready', meta: 'Handoff', loss: '2.8 days' },
        { id: 'readypaid', name: 'Ready to Paid', meta: 'Payment run', loss: '0.7 days' },
        { id: 'manager', name: 'Manager Approval', meta: 'Approval step', loss: '0.3 days' },
      ],
      nudge: 'Escalate approvals',
      placeholder: 'e.g. How do we speed up Board Approval?',
      suggestions: [
        'Which boards are slowest to approve?',
        'Show the 6-month late-payment trend',
        'What would expediting Board Approval save?',
      ],
      mockA:
        'Board Approval alone accounts for 6.2 of the 6.8 days. Expediting that single step would cut total processing time close to half.',
      dataSource: 'illustrative',
      sourceNote: PKG_SOURCE,
    },
  ],

  /* --------------------------------------------------------------- Beacon */
  beacon: [
    {
      id: 'rev',
      category: 'Revenue Manager',
      accent: REV_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$18.3K',
      status: 'active',
      figure: '$18,250',
      figureSuffix: '/mo',
      headline:
        'in uncaptured admin fees — 125 of your 457 associations have no admin fee contract.',
      hero: REV_HERO,
      cta: 'Open admin-fee rules',
      chartLabel: 'Associations by admin fee contract',
      chart: [
        { label: 'With contract', pct: 72, color: REV_ACCENT, dark: true },
        { label: 'No admin fee contract', pct: 28, color: '#3d4759', dark: false },
      ],
      benchmark: '$146/association/mo',
      delta: '$219K/yr',
      narrative:
        'Your 326 associations with admin fee contracts already generate <b style="color:var(--iq-h1-color);">$47,444/month</b>. The remaining 125 represent untapped revenue at the same rate. You have proven the model across 71% of the portfolio &mdash; this is a rollout, not a new decision.',
      nudge: 'Enable default rules',
      placeholder: 'e.g. Which associations are missing contracts?',
      suggestions: [
        'What would full rollout recover annually?',
        'Which fee categories are most common?',
        'How does our rate compare with the platform?',
      ],
      mockA:
        'At your own $146/association/month rate, the remaining 125 associations represent $18,250/month. The platform average is $456, so there may be headroom on the rate as well as the count.',
      dataSource: 'illustrative',
      sourceNote: PKG_SOURCE,
    },
  ],

  /* --------------------------------------------------------------- Access */
  access: [
    {
      id: 'rev',
      category: 'Revenue Manager',
      accent: REV_ACCENT,
      date: 'July 2026',
      dateLabel: 'Jul 31',
      short: '$157K',
      status: 'active',
      figure: '$157,000',
      figureSuffix: '/mo',
      headline:
        'in uncaptured admin fees — 344 of your 347 associations have no admin fee contract.',
      hero: REV_HERO,
      cta: 'Open admin-fee rules',
      chartLabel: 'Associations by admin fee contract',
      chart: [
        { label: 'With contract', pct: 1, color: REV_ACCENT, dark: true },
        { label: 'No admin fee contract', pct: 99, color: '#3d4759', dark: false },
      ],
      benchmark: '$456/association/mo',
      delta: '$1.9M/yr',
      narrative:
        '<b style="color:var(--iq-h1-color);">99%</b> of associations have no admin fee contract, with 344 already on Management Fee contracts. This is the largest untapped admin fee opportunity on the platform. A conservative pilot of 50 associations would generate an estimated $22,800/month.',
      nudge: 'Enable default rules',
      placeholder: 'e.g. Which 50 associations should we pilot?',
      suggestions: [
        'What would a 50-association pilot recover?',
        'Which fee categories are most common?',
        'How long does rollout usually take?',
      ],
      mockA:
        'A 50-association pilot at the platform average of $456/month would recover about $22,800/month, roughly 15% of the total gap, before any wider rollout.',
      dataSource: 'illustrative',
      sourceNote: PKG_SOURCE,
    },
  ],
}
