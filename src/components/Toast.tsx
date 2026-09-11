type Props = {
  message: string
}

export default function Toast({ message }: Props) {
  return (
    <div
      className="anim-fade-up fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-[10px] text-sm text-color-h2"
      style={{
        background: 'var(--iq-card-color)',
        border: '1px solid var(--iq-stage-border-color)',
        padding: '12px 20px',
        boxShadow: '0 12px 40px rgba(0,0,0,.15)',
      }}
    >
      <div className="text-color-success">✓</div>
      {message}
    </div>
  )
}
