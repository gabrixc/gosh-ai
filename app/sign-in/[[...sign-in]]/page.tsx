import { SignIn } from "@clerk/nextjs";

const clerkAppearance = {
  variables: {
    colorBackground: "var(--card)",
    colorText: "var(--foreground)",
    colorTextSecondary: "var(--muted-foreground)",
    colorInputBackground: "var(--muted)",
    colorInputText: "var(--foreground)",
    colorPrimary: "var(--primary)",
    colorNeutral: "var(--foreground)",
    colorShimmer: "var(--border)",
  },
};

export default function SignInPage() {
  return (
    <main
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      className="flex min-h-screen"
    >
      {/* Left panel — hidden on small screens */}
      <div
        style={{
          backgroundColor: "var(--card)",
          borderRight: "1px solid var(--border)",
        }}
        className="hidden md:flex md:w-1/2 flex-col justify-center px-16"
      >
        <div className="max-w-sm">
          <p
            style={{ color: "var(--foreground)" }}
            className="text-2xl font-semibold tracking-tight mb-2"
          >
            Gosh AI
          </p>
          <p
            style={{ color: "var(--muted-foreground)" }}
            className="text-sm mb-8"
          >
            Your AI-powered project editor
          </p>
          <ul className="space-y-3">
            {[
              "Write and iterate on projects with AI",
              "Organize work across multiple projects",
              "Access your editor from anywhere",
            ].map((item) => (
              <li
                key={item}
                style={{ color: "var(--muted-foreground)" }}
                className="text-sm flex items-start gap-2"
              >
                <span
                  style={{ color: "var(--primary)" }}
                  className="mt-0.5 shrink-0"
                >
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right panel — Clerk form */}
      <div
        style={{ backgroundColor: "var(--background)" }}
        className="flex w-full md:w-1/2 items-center justify-center p-8"
      >
        <SignIn appearance={clerkAppearance} />
      </div>
    </main>
  );
}
