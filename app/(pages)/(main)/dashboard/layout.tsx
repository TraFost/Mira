import { PropsWithChildren } from "react";

import { PATH } from "~/utils/constants/dashboard-path.constant";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-4 lg:mx-24 flex pt-24">
      {/* Sidebar */}
      {/* <aside className="hidden fixed top-24 left-0 lg:left-16 w-64 h-fit lg:flex flex-col gap-16">
        <a
          href="/"
          className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-tr from-foreground to-gradient"
        >
          🔥 Mira
        </a>
        <ul className="flex flex-col gap-2 border border-foreground/10 rounded-xl bg-background/70 backdrop-blur-md shadow-lg p-4">
          {PATH.map((p) => (
            <li key={p.path}>
              <a
                href="#"
                className="flex gap-4 w-full px-4 py-2 rounded-lg text-lg text-foreground hover:bg-foreground/10 transition-colors"
              >
                {p.icon}
                <span>{p.path}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-64 hidden lg:block" /> */}

      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
