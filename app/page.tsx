import { FEATURES } from "~/utils/constants/features.constant";

export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-8 lg:mx-48">
      <section className="py-24 lg:mt-24 w-full min-h-[512px] text-2xl px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 w-fit bg-clip-text text-transparent bg-linear-to-tr from-foreground to-gradient">
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
          href="/login"
          className="inline-block rounded-full bg-gradient-to-r from-secondary via-foreground to-gradient p-[2px] mt-4"
        >
          <span className="block rounded-full bg-background px-8 py-3 text-foreground text-lg hover:bg-background/50">
            Get Started
          </span>
        </a>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-96 bg-pattern-x">
        <div className="p-8 sm:p-12 flex items-center justify-center text-center lg:text-right bg-background">
          <p className="text-lg sm:text-xl lg:text-3xl max-w-xl">
            Mira is a smart on-chain agent that tracks token prices and makes
            autonomous buy decisions based on your defined thresholds. Once
            triggered, it executes a mock purchase and records the logic
            transparently using Hedera's Consensus Service.
          </p>
        </div>
        <div className="min-h-[200px]" />
      </section>

      <section className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <p className="text-3xl md:text-7xl font-semibold text-center">
          Features & <span className="text-sky-blue">Tools</span>
        </p>
        <div className="flex flex-col justify-center gap-4">
          {FEATURES.map((c) => (
            <div key={c.title} className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {c.icon}
                <p className="text-xl sm:text-2xl font-semibold">{c.title}</p>
              </div>
              <p className="text-base sm:text-lg text-foreground/50">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mt-32 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-screen-xl mx-auto rounded-3xl p-8 sm:p-12 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to trade smarter?
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Connect your wallet and let Mira monitor, decide, and log your token
            trades — all without writing a single line of code.
          </p>
          <a
            href="/login"
            className="inline-block rounded-full bg-gradient-to-r from-secondary via-foreground to-gradient p-[2px] hover:scale-[1.02] transition-transform"
          >
            <span className="block rounded-full bg-background px-8 py-3 text-foreground font-semibold">
              Get Started with Mira
            </span>
          </a>
        </div>
      </section>

      <div className="h-24 sm:h-32 lg:h-52" />
    </div>
  );
}
