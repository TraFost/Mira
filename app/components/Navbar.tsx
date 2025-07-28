"use client";

import Link from "next/link";

import { useExclude } from "~/hooks/use-exclude.hook";
import { PAGES } from "~/utils/constants/pages.constant";

export default function Navbar() {
  const isExcluded = useExclude(PAGES.auth.login);

  if (isExcluded) return null;

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 py-3 z-50 bg-foreground/5 outline-1 outline-foreground/20 rounded-full backdrop-blur-md bg-opacity-30 shadow-lg flex justify-between items-center">
        <a href="/" className="text-foreground text-2xl font-bold">
          🔥 Mira
        </a>

        <div className="flex gap-8 items-center">
          <a className="hidden md:block hover:underline" href="#">
            Market
          </a>

          <Link
            href="/login"
            scroll={false}
            className="inline-block rounded-full bg-gradient-to-r from-secondary via-foreground to-gradient p-[2px]"
          >
            <span className="block rounded-full bg-background px-4 py-1 text-foreground hover:bg-background/50">
              Start
            </span>
          </Link>
        </div>
      </div>

      <div className="h-[92px]" />
    </>
  );
}
