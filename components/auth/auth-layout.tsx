import type { ReactNode } from "react";
import { NetworkCanvas } from "./network-canvas";

const FEATURES = [
  {
    id: "architecture-generation",
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    id: "real-time-collaboration",
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    id: "instant-spec-generation",
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00D1C1"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800;900&display=swap');

        .gl-root {
          display: flex;
          min-height: 100vh;
          background: #0F0F0F;
          color: #FFFFFF;
          font-family: ui-sans-serif, system-ui, sans-serif;
        }

        /* ── Left panel ── */
        .gl-left {
          display: none;
          position: relative;
          overflow: hidden;
          background: #080808;
          flex-direction: column;
          justify-content: flex-end;
          padding: 3rem;
        }

        @media (min-width: 768px) {
          .gl-left  { display: flex; width: 58%; }
          .gl-right { width: 42%; }
          .gl-mobile-brand { display: none !important; }
        }

        .gl-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,209,193,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,209,193,.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 1;
        }

        .gl-glow-br {
          position: absolute;
          bottom: -120px;
          left: -120px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,209,193,.09) 0%, transparent 68%);
          z-index: 2;
          pointer-events: none;
        }

        .gl-glow-tr {
          position: absolute;
          top: -80px;
          right: 60px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,209,193,.05) 0%, transparent 68%);
          z-index: 2;
          pointer-events: none;
        }

        .gl-brand {
          position: absolute;
          top: 2.75rem;
          left: 3rem;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }

        .gl-brand-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00D1C1;
          box-shadow: 0 0 0 0 rgba(0,209,193,.6);
          animation: gl-pulse 2.4s ease-in-out infinite;
        }

        @keyframes gl-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,209,193,.5); }
          50%      { box-shadow: 0 0 0 6px rgba(0,209,193,0); }
        }

        .gl-brand-name {
          font-family: 'Big Shoulders Display', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .gl-content {
          position: relative;
          z-index: 10;
          padding-top: 1rem;
        }

        .gl-tagline {
          font-family: 'Big Shoulders Display', sans-serif;
          font-size: clamp(2rem, 3.8vw, 3.25rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0 0 1.1rem;
        }

        .gl-tagline em {
          font-style: normal;
          color: #00D1C1;
        }

        .gl-desc {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #8E8E8E;
          max-width: 36ch;
          margin: 0 0 2.25rem;
        }

        .gl-features {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .gl-feature {
          display: flex;
          gap: 0.875rem;
          align-items: flex-start;
        }

        .gl-feature-icon {
          flex-shrink: 0;
          margin-top: 2px;
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid rgba(0,209,193,.25);
          background: rgba(0,209,193,.06);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gl-feature-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: .01em;
          margin-bottom: .2rem;
        }

        .gl-feature-desc {
          font-size: 0.75rem;
          color: #8E8E8E;
          line-height: 1.55;
        }

        .gl-sep {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,209,193,.18) 25%,
            rgba(0,209,193,.18) 75%,
            transparent 100%
          );
          z-index: 20;
        }

        .gl-footer {
          position: absolute;
          bottom: 2rem;
          left: 3rem;
          font-size: 0.68rem;
          color: rgba(142,142,142,.35);
          letter-spacing: .03em;
          z-index: 10;
        }

        /* ── Right panel ── */
        .gl-right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 2rem;
          background: #0F0F0F;
          width: 100%;
          flex-direction: column;
        }

        .gl-right-inner {
          width: 100%;
          max-width: 380px;
        }

        .gl-mobile-brand {
          display: flex;
          align-items: center;
          gap: .625rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
      `}</style>

      <main className="gl-root">
        {/* ── Left panel ── */}
        <div className="gl-left">
          <div className="gl-grid" />
          <div className="gl-glow-br" />
          <div className="gl-glow-tr" />
          <NetworkCanvas />

          <div className="gl-brand">
            <div className="gl-brand-pulse" />
            <span className="gl-brand-name">Gosh AI</span>
          </div>

          <div className="gl-content">
            <h1 className="gl-tagline">
              Design systems<br />
              at the <em>speed</em><br />
              of thought.
            </h1>
            <p className="gl-desc">
              Describe your architecture in plain English. Gosh AI maps it to a
              shared canvas your whole team can refine in real time.
            </p>
            <div className="gl-features">
              {FEATURES.map((f) => (
                <div key={f.id} className="gl-feature">
                  <div className="gl-feature-icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="gl-feature-title">{f.title}</div>
                    <div className="gl-feature-desc">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gl-sep" />
          <span className="gl-footer">© 2026 Gosh AI. All rights reserved.</span>
        </div>

        {/* ── Right panel ── */}
        <div className="gl-right">
          <div className="gl-right-inner">
            <div className="gl-mobile-brand">
              <div className="gl-brand-pulse" />
              <span className="gl-brand-name">Gosh AI</span>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
