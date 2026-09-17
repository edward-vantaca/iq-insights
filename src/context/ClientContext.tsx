import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { clients, defaultClientId } from '../data/clients'
import type { Client, ClientId } from '../types/insight'

type ClientContextValue = {
  clients: Client[]
  client: Client
  clientId: ClientId
  setClientId: (id: ClientId) => void
}

const ClientContext = createContext<ClientContextValue | null>(null)

/**
 * The selected client lives above the router because the Navbar picks it and
 * the insight page reads it, and those two are siblings in App.
 */
export function ClientProvider({ children }: { children: ReactNode }) {
  const [clientId, setClientId] = useState<ClientId>(defaultClientId)

  const value = useMemo<ClientContextValue>(() => {
    const client = clients.find((c) => c.id === clientId) ?? clients[0]
    return { clients, client, clientId, setClientId }
  }, [clientId])

  return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
}

export function useClient() {
  const ctx = useContext(ClientContext)
  if (!ctx) throw new Error('useClient must be used inside <ClientProvider>')
  return ctx
}
