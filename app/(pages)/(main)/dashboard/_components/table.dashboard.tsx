import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table/table";

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

export default function DashboardTable() {
  const formatNumber = useNumberFormatter();

  return (
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
  );
}
