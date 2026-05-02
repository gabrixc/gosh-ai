import type { ReactNode } from "react";

const FEATURES = [
  "Write and iterate on projects with AI",
  "Organize work across multiple projects",
  "Access your editor from anywhere",
];

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen bg-background text-foreground">
      {/* Left panel — hidden on small screens */}
      <div
        className="hidden md:flex md:w-1/2 flex-col justify-center px-16 bg-card"
        style={{ borderRight: "1px solid var(--border)" }}
      >
        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-foreground">
            Gosh AI
          </h1>
          <p className="text-sm mb-8 text-muted-foreground">
            Your AI-powered project editor
          </p>
          <ul className="space-y-3">
            {FEATURES.map((item) => (
              <li key={item} className="text-sm flex items-start gap-2 text-muted-foreground">
                <span className="mt-0.5 shrink-0 text-primary">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right panel — Clerk form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-background">
        {children}
      </div>
    </main>
  );
}
