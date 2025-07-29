"use client";

import { useState } from "react";

import { Input } from "~/components/ui/input/input";

import DashboardMarkets from "./_components/markets.dashboard";
import DashboardSidebar from "./_components/sidebar.dashboard";
import DashboardTable from "./_components/table.dashboard";

const COIN = ["ETH", "BTC", "Doge"];

export default function DashboardPage() {
  const [coin, setCoin] = useState<string>(COIN[0]);

  return (
    <div className="min-h-screen flex h-[2000px]">
      {/* Right sidebar */}
      <DashboardSidebar name="Agus" walletCoin="ETH" amount={200000} />

      {/* Main content */}
      <main className="flex-1 flex flex-col gap-4 p-4 lg:p-8 lg:pr-80">
        <h1 className="text-4xl font-bold mt-4">Dashboard</h1>
        <DashboardMarkets coin={coin} setCoin={setCoin} coinList={COIN} />
        <section className="flex flex-col gap-2">
          <h2>Auto Buy</h2>
          <div className="flex gap-4 items-end">
            <Input type="number" placeholder={`${coin}/USD`} className="w-36" />
            <button className="border px-4 py-1.5 rounded-md h-fit">
              Set Auto-Buy
            </button>
          </div>
        </section>
        <DashboardTable />
      </main>
    </div>
  );
}
