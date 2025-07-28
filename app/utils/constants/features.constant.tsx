import { Bot, Brain, ClockFading, Link, Wallet } from "lucide-react";

export const FEATURES = [
  {
    icon: <ClockFading />,
    title: "Watchlist Setup",
    desc: "Track tokens, set price alerts, configure triggers",
  },
  {
    icon: <Bot />,
    title: "Autonomous Actions",
    desc: "Executes buy logic when conditions are met",
  },
  {
    icon: <Brain />,
    title: "LLM-Powered Justifications",
    desc: "Explains each buy with natural language reasoning (OpenAI/Gemini)",
  },
  {
    icon: <Link />,
    title: "On-Chain Logging",
    desc: "Uses Hedera Consensus Service to record actions",
  },
  {
    icon: <Wallet />,
    title: "Wallet Auth",
    desc: "Connect with any Hedera-compatible wallet",
  },
] as const;
