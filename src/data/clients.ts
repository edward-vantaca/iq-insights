import type { Client } from '../types/insight'

/**
 * The eight management companies covered by the July 2026 insight packages.
 * `insights` is deliberately per-client: no client has all three, and only JEA
 * has two, so the rail is rendered from this rather than from a fixed list.
 *
 * Ordered by portfolio size so the dropdown reads sensibly.
 */
export const clients: Client[] = [
  { id: 'trust', name: 'The Management Trust', short: 'Trust', insights: ['ap'] },
  { id: 'jea', name: 'Juda, Eskew & Associates', short: 'JEA', insights: ['ar', 'rev'] },
  { id: 'access', name: 'Access Management Group', short: 'Access', insights: ['rev'] },
  { id: 'beacon', name: 'Beacon Management Services', short: 'Beacon', insights: ['rev'] },
  { id: 'essex', name: 'Essex Association Management', short: 'Essex', insights: ['ar'] },
  { id: 'lighthouse', name: 'Lighthouse Management', short: 'Lighthouse', insights: ['ar'] },
  { id: 'hoaorg', name: 'HOA Organizers', short: 'HOA Organizers', insights: ['ap'] },
  { id: 'greenacre', name: 'Greenacre Properties, Inc.', short: 'Greenacre', insights: ['ap'] },
]

export const defaultClientId = clients[1].id // JEA — the only client with two insights
