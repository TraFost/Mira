"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jul 21", value: 52000 },
  { name: "Jul 22", value: 38290 },
  { name: "Jul 23", value: 22900 },
  { name: "Jul 24", value: 20000 },
  { name: "Jul 25", value: 27800 },
  { name: "Jul 26", value: 4000 },
  { name: "Jul 27", value: 25336 },
  { name: "Jul 28", value: 34212 },
  { name: "Jul 29", value: 36456 },
  { name: "Jul 30", value: 13425 },
  { name: "Jul 31", value: 3213 },
];

export default function LineChartComponent() {
  return (
    <div className="w-full h-64 rounded-xl bg-black p-4 shadow-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: "#222", border: "none" }}
            labelStyle={{ color: "#aaa" }}
            itemStyle={{ color: "#fff" }}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#00FFB2"
            strokeWidth={2}
            dot={false}
            strokeOpacity={0.9}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
