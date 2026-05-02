import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";
import { clerkAppearance } from "@/components/auth/clerk-appearance";

export const metadata: Metadata = {
  title: "Sign In — Gosh AI",
};

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn appearance={clerkAppearance} />
    </AuthLayout>
  );
}
