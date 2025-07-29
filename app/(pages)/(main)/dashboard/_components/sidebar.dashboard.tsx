import { DollarSign, User, Wallet } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card/card";

import { useNumberFormatter } from "~/hooks/use-number-formatter.hook";

interface Props {
  name: string;
  walletCoin: string;
  amount: number;
}

export default function DashboardSidebar({ name, walletCoin, amount }: Props) {
  const formatNumber = useNumberFormatter();

  return (
    <aside className="hidden lg:block fixed top-8 right-8 h-[calc(100vh-4rem)] w-72 rounded-xl border p-4 overflow-y-auto shadow-lg bg-bokeh">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <User />
          <p className="text-xl font-semibold">{name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Wallet</p>
          <Card className="w-full gap-2">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <Wallet />
                <span>{walletCoin}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 items-center">
              <DollarSign />
              <p>{formatNumber(amount)}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </aside>
  );
}
