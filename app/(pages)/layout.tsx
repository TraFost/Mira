import { Sora } from "next/font/google";

import type { Metadata } from "next";

import Navbar from "~/components/navbar";

import Navbar from "../components/layout/navbar";
import "../globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mira - AI Trading Agent",
  description:
    "Mira is an autonomous AI token watcher and trading agent on Hedera. Set price rules and let Mira buy when it's right. All decisions recorded on-chain.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <Navbar />
        {modal}
        <main vaul-drawer-wrapper="">{children}</main>
      </body>
    </html>
  );
}
