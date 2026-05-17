export function Analogy({ children, title }) {
  return (
    <div className="callout callout-analogy">
      <span className="callout-icon">💡</span>
      <div className="callout-body">
        {title && <strong style={{display:'block',marginBottom:'0.25rem',color:'var(--accent)'}}>{title}</strong>}
        <p>{children}</p>
      </div>
    </div>
  );
}

export function ExamTip({ children }) {
  return (
    <div className="callout callout-tip">
      <span className="callout-icon">🎯</span>
      <div className="callout-body">
        <strong style={{display:'block',marginBottom:'0.25rem',color:'var(--amber)'}}>Exam Tip</strong>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function WarningBox({ children, title='Watch Out' }) {
  return (
    <div className="callout callout-danger">
      <span className="callout-icon">⚠️</span>
      <div className="callout-body">
        <strong style={{display:'block',marginBottom:'0.25rem',color:'var(--red)'}}>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function SuccessBox({ children, title }) {
  return (
    <div className="callout callout-success">
      <span className="callout-icon">✅</span>
      <div className="callout-body">
        {title && <strong style={{display:'block',marginBottom:'0.25rem',color:'var(--emerald)'}}>{title}</strong>}
        <p>{children}</p>
      </div>
    </div>
  );
}
