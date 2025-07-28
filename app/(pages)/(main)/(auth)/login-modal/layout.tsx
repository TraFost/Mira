import type { ReactNode } from "react";

export const metadata = {
  title: "Mira - Login Modal",
  description: "Login using your wallet to access Mira's features.",
};

type LayoutProps = {
  children: ReactNode;
};

export default function LoginModalLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}
