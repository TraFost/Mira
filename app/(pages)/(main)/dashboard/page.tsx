"use client";

import { Bitcoin, User, Wallet } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card/card";
import LineChartComponent from "~/components/ui/chart/line-chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useNumberFormatter } from "~/hooks/use-number-formatter.hook";

const DATA = [
  {
    id: "BTC120",
    coin: "BitCoin",
    amount: 0.2,
    price: 2000,
    date: "5/25/2024",
  },
  {
    id: "ETH432",
    coin: "Etherium",
    amount: 1,
    price: 200021,
    date: "25/25/2024",
  },
  {
    id: "BTC9562",
    coin: "BitCoin",
    amount: 0.005,
    price: 2000,
    date: "5/25/2024",
  },
  {
    id: "DOGE325",
    coin: "DogeCoin",
    amount: 0.00123012,
    price: 202300,
    date: "5/12/2025",
  },
];

export default function DashboardPage() {
  const formatNumber = useNumberFormatter();

  return (
    <div className="min-h-screen flex h-[2000px]">
      {/* Right sidebar */}
      <aside className="hidden lg:block fixed top-8 right-8 h-[calc(100vh-4rem)] w-72 rounded-xl border p-4 overflow-y-auto shadow-lg bg-bokeh">
        {/* <p className="text-lg font-semibold mb-4">Right Sidebar</p> */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <User />
            <p className="text-xl font-semibold">Agus</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Wallet</p>
            <Card className="w-full gap-2">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  <Wallet />
                  <span>ETH</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 items-center">
                <Bitcoin />
                <p>24,000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col gap-4 p-4 lg:p-8 lg:pr-80">
        {/* pr-80 untuk beri ruang sidebar */}
        <h1 className="text-4xl font-bold mt-4">Dashboard</h1>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Markets</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1-month" defaultValue="1-month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-day">1-day</SelectItem>
              <SelectItem value="1-week">1-week</SelectItem>
              <SelectItem value="1-month">1-month</SelectItem>
              <SelectItem value="1-year">1-year</SelectItem>
            </SelectContent>
          </Select>
          <LineChartComponent />
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Activity</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Coin</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DATA.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.coin}</TableCell>
                  <TableCell>{d.amount}</TableCell>
                  <TableCell>${formatNumber(d.price)}</TableCell>
                  <TableCell>{d.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  );
}
