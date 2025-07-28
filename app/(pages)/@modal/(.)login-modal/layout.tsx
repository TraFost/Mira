import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mira - Login Modal",
  description: "Login using your wallet to access Mira's features.",
};

export default function ModalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
