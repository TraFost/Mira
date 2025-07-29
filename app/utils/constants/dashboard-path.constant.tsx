import { CircleUser, Gauge, Settings, Wallet } from "lucide-react";

export const PATH = [
  {
    icon: <Gauge />,
    path: "Dashboard",
  },
  {
    icon: <Wallet />,
    path: "Wallet",
  },
  {
    icon: <CircleUser />,
    path: "Account",
  },
  {
    icon: <Settings />,
    path: "Settings",
  },
] as const;
