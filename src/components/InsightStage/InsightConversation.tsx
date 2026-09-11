import { useState, useRef, useEffect } from 'react'
import type { Insight, ChatMessage } from '../../types/insight'

type Props = {
  insight: Insight
}

function mockAnswer(q: string, insight: Insight): string {
  const lower = q.toLowerCase()
  if (/region|geo|where/.test(lower)) return insight.mockA
  if (/manager|owner|who/.test(lower))
    return `Two community managers own most of the exposure: Priya Nair (${insight.short === '$43K' ? '$18,400' : '$3,900'}) and Marcus Ellis (${insight.short === '$43K' ? '$12,100' : '$2,400'}). Both cover Region 3.`
  if (/trend|history|month/.test(lower))
    return `Trailing 6 months: the figure has grown 22% since May. Biggest jump was August (+$8,900) after the Harborview onboarding.`
  if (/model|simulate|lift|if/.test(lower))
    return `Projected impact: a 10-pt lift across your bottom quartile would recover an additional $${insight.id === 'ar' ? '12,400' : '4,200'}/mo based on current portfolio mix.`
  return insight.mockA
}

export default function InsightConversation({ insight }: Props) {
  const [conversation, setConversation] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const threadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight
    }
  }, [conversation, isThinking])

  const askQuestion = (text: string) => {
    const q = text.trim()
    if (!q) return
    const next: ChatMessage[] = [...conversation, { q, a: null }]
    setConversation(next)
    setDraft('')
    setIsThinking(true)
    setTimeout(() => {
      const answer = mockAnswer(q, insight)
      setConversation(
        next.map((c, i) => (i === next.length - 1 ? { ...c, a: answer } : c)),
      )
      setIsThinking(false)
    }, 1400)
  }

  const hasConversation = conversation.length > 0
  const showSuggestions = !hasConversation && !isThinking
  const draftTrim = draft.trim()

  return (
    <div className="border-t border-color-hr bg-color-card px-16 pb-20 pt-10">
      {/* Header */}
      <div className="mb-3.5 flex items-center gap-2.5">
        <div className="text-sm font-semibold text-color-active">
          ✦ Ask a follow-up
        </div>
        {hasConversation && (
          <div className="text-[11px] text-color-muted2">
            · {conversation.length} exchange{conversation.length !== 1 ? 's' : ''}
          </div>
        )}
        <div className="flex-1" />
        {hasConversation && (
          <button
            onClick={() => setConversation([])}
            className="border-none bg-transparent text-[11px] text-color-muted2 hover:text-color-p"
          >
            Clear
          </button>
        )}
      </div>

      {/* Chat thread */}
      {hasConversation && (
        <div
          ref={threadRef}
          role="log"
          aria-live="polite"
          className="mb-4 flex flex-col gap-3"
        >
          {conversation.map((c, i) => (
            <div key={i} className="anim-fade-up">
              {/* User bubble */}
              <div className="mb-2 flex justify-end">
                <div
                  className="max-w-[560px] text-sm leading-relaxed text-color-h1"
                  style={{
                    background: 'var(--iq-infobox-color)',
                    padding: '10px 14px',
                    borderRadius: '12px 12px 2px 12px',
                  }}
                >
                  {c.q}
                </div>
              </div>
              {/* Assistant bubble */}
              {c.a && (
                <div className="flex items-start gap-2.5">
                  <div
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-sm text-color-active"
                    style={{
                      background: 'var(--iq-cell-color)',
                      border: '1px solid var(--iq-stage-border-color)',
                    }}
                  >
                    ✦
                  </div>
                  <div
                    className="max-w-[640px] text-sm leading-[1.55] text-color-h2"
                    style={{
                      background: 'var(--iq-cell-color)',
                      border: '1px solid var(--iq-border-color)',
                      padding: '12px 16px',
                      borderRadius: '12px 12px 12px 2px',
                    }}
                  >
                    {c.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Thinking indicator */}
      {isThinking && (
        <div
          className="mb-4 flex max-w-[520px] items-center gap-3 rounded-xl"
          style={{
            background: 'var(--iq-cell-color)',
            border: '1px solid var(--iq-border-color)',
            padding: '12px 16px',
          }}
        >
          <div className="text-sm text-color-active">✦</div>
          <div>
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </div>
          <div className="text-xs italic text-color-muted2">
            Genie is analyzing your portfolio…
          </div>
        </div>
      )}

      {/* Prompt input */}
      <div
        className="flex items-center gap-3 rounded-xl transition-colors"
        style={{
          background: 'var(--iq-cell-color)',
          border: `1px solid ${draftTrim ? 'var(--iq-stage-border-color)' : 'var(--iq-border-color)'}`,
          padding: '14px 16px',
        }}
      >
        <div className="text-lg text-color-active">✦</div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              askQuestion(draft)
            }
          }}
          placeholder={insight.placeholder}
          aria-label="Ask a follow-up question"
          rows={1}
          className="flex-1 resize-none overflow-hidden border-0 bg-transparent p-0 text-[15px] text-color-h2 placeholder-color-muted2 focus:outline-none focus:ring-0"
        />
        <button
          onClick={() => askQuestion(draft)}
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all"
          style={{
            background: draftTrim ? 'var(--iq-active-color)' : 'var(--iq-border-color)',
            opacity: draftTrim ? 1 : 0.7,
          }}
        >
          Ask IQ
        </button>
      </div>

      {/* Suggestion chips */}
      {showSuggestions && (
        <div className="mt-3.5 flex flex-wrap gap-2">
          {insight.suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => askQuestion(s)}
              className="rounded-full border border-color-hr bg-color-cell px-3.5 py-1.5 text-xs text-color-p transition-colors hover:border-color-stage-border hover:text-color-h2"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
