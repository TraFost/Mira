import { PropsWithChildren } from "react";

const PATH = ["Dashboard", "Markets", "Wallet", "Account", "Settings"];

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-4 lg:mx-48 flex">
      {/* Sidebar */}
      <aside className="fixed top-24 left-0 lg:left-16 w-64 h-fit border border-foreground/10 rounded-xl bg-background/70 backdrop-blur-md shadow-lg p-4">
        <ul className="flex flex-col gap-2">
          {PATH.map((p) => (
            <li key={p}>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded-lg text-lg text-foreground hover:bg-foreground/10 transition-colors"
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-64 hidden lg:block" />

      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
