import type { ClerkAppearanceTheme } from "@clerk/shared/types";

export const clerkAppearance: ClerkAppearanceTheme = {
  variables: {
    colorBackground: "#111111",
    colorForeground: "#FFFFFF",
    colorMutedForeground: "#8E8E8E",
    colorInput: "#1A1A1A",
    colorInputForeground: "#FFFFFF",
    colorPrimary: "#00D1C1",
    colorNeutral: "#FFFFFF",
    colorShimmer: "rgba(0,209,193,0.08)",
    borderRadius: "8px",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
  },
  elements: {
    card: {
      boxShadow: "none",
      border: "1px solid rgba(255,255,255,0.06)",
      background: "#111111",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontWeight: "700",
    },
    headerSubtitle: {
      color: "#8E8E8E",
    },
    socialButtonsBlockButton: {
      border: "1px solid rgba(255,255,255,0.1)",
      background: "#1A1A1A",
      color: "#FFFFFF",
    },
    dividerLine: {
      background: "rgba(255,255,255,0.08)",
    },
    dividerText: {
      color: "#8E8E8E",
    },
    formFieldLabel: {
      color: "#8E8E8E",
      fontSize: "0.8rem",
    },
    formFieldInput: {
      background: "#1A1A1A",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#FFFFFF",
    },
    formButtonPrimary: {
      background: "#00D1C1",
      color: "#0F0F0F",
      fontWeight: "600",
    },
    footerActionText: {
      color: "#8E8E8E",
    },
    footerActionLink: {
      color: "#00D1C1",
    },
  },
};
