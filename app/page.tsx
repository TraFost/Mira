const CARD = [
  {
    title: "Watchlist Setup",
    desc: "Track tokens, set price alerts, configure triggers",
  },
  {
    title: "Autonomous Actions",
    desc: "Executes buy logic when conditions are met",
  },
  {
    title: "LLM-Powered Justifications",
    desc: "Explains each buy with natural language reasoning (OpenAI/Gemini)",
  },
  {
    title: "On-Chain Logging",
    desc: "Uses Hedera Consensus Service to record actions",
  },
  {
    title: "Wallet Auth",
    desc: "Blade Wallet or WalletConnect — no email required",
  },
];

export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-8">
      <div className="py-24 w-full min-h-[512px] flex flex-col text-xl items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          Mira
        </h1>
        <p className="max-w-xl">
          Autonomous AI token watcher and trading agent on Hedera.
        </p>
        <p className="max-w-xl">
          Set a price rule, let Mira decide when to buy, and log it all
          on-chain.
        </p>
        <a
          className="group relative inline-block focus:outline-hidden mt-12"
          href="#"
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-secondary transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
            GET STARTED
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-96 bg-pattern-x">
        <div className="p-8 sm:p-12 flex items-center justify-center text-center lg:text-right bg-background">
          <p className="text-lg sm:text-xl lg:text-2xl max-w-xl">
            Mira is a smart on-chain agent that tracks token prices and makes
            autonomous buy decisions based on your defined thresholds. Once
            triggered, it executes a mock purchase and records the logic
            transparently using Hedera's Consensus Service.
          </p>
        </div>
        <div className="min-h-[200px]" />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Features
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {CARD.map((c) => (
            <div
              key={c.title}
              className="border-2 flex flex-col justify-around gap-4 w-72 sm:w-72 p-4 h-48 sm:h-52 text-center"
            >
              <p className="text-xl sm:text-2xl font-semibold">{c.title}</p>
              <p className="text-base sm:text-lg">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-24 sm:h-32 lg:h-52" />
    </div>
  );
}
