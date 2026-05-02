import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";
import { clerkAppearance } from "@/components/auth/clerk-appearance";

export const metadata: Metadata = {
  title: "Sign Up — Gosh AI",
};

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUp appearance={clerkAppearance} />
    </AuthLayout>
  );
}
