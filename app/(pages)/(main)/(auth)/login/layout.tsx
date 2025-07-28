import type { ReactNode } from "react";

export const metadata = {
  title: "Mira - Login",
  description: "Login using your wallet to access Mira's features.",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}
