import { Dispatch, type SetStateAction, useState } from "react";

import LineChartComponent from "~/components/ui/chart/line-chart";
import { BaseSelect } from "~/components/ui/select/base-select";

import { TIMES } from "~/utils/constants/time-range.constant";

interface Props {
  coin: string;
  setCoin: Dispatch<SetStateAction<string>>;
  coinList: string[];
}

export default function DashboardMarkets({ coin, setCoin, coinList }: Props) {
  const [time, setTime] = useState<string>(TIMES[0]);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Markets</h2>
      <div className="flex gap-4 items-end">
        <div>
          <p>Coin</p>
          <BaseSelect value={coin} onChange={setCoin} options={coinList} />
        </div>
        <BaseSelect value={time} onChange={setTime} options={[...TIMES]} />
      </div>
      <LineChartComponent />
    </section>
  );
}
