# Mira 🤖📈

Autonomous AI token watcher and trading agent on Hedera.  
Set a price rule, let Mira decide when to buy, and log it all on-chain.

---

## 🔍 Overview

Mira is a smart on-chain agent that tracks token prices and makes autonomous buy decisions based on your defined thresholds. Once triggered, it executes a mock purchase and records the logic transparently using Hedera’s Consensus Service.

No email logins — just your Hedera wallet and a simple UI. Mira handles the rest.

---

## ⚙️ Features

- **Watchlist Setup**: Track tokens, set price alerts, configure triggers
- **Autonomous Actions**: Executes buy logic when conditions are met
- **LLM-Powered Justifications**: Explains each buy with natural language reasoning (OpenAI/Gemini)
- **On-Chain Logging**:
  - Uses Hedera Consensus Service to record actions
  - Optional: Save AI explanation via Hedera File Service
- **Wallet Auth**: WalletConnect — no email required

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- Yarn or npm
- PostgreSQL DB (local or cloud)
- OpenAI or Gemini API key
- Hedera testnet account

### Installation

```bash
git clone https://github.com/your-username/mira-agent.git
cd mira-agent
cp .env.example .env
npm install
npm run dev
```

### Usage

1. Visit `http://localhost:3000`
2. Connect Hedera wallet (Blade/HashPack)
3. Input token symbol and price rule
4. Mira starts watching, acts if price hits
5. See history and reasoning

---

## 🧠 Architecture

- **Frontend**: Next.js + Tailwind
- **Backend**: Server Components + minimal API routes
- **AI Engine**: OpenAI or Gemini LLMs
- **Database**: PostgreSQL + Drizzle ORM
- **Blockchain**: Hedera HCS + File Service
- **Wallets**: WalletConnect

---

## 🔁 Flow Summary

1. User sets watch: Token X, buy if < $Y
2. Mira stores config in DB
3. Background watcher (cron/poll) checks price
4. If condition met:
   - Calls mock smart contract
   - Logs result to HCS
   - Queries LLM: "Why was this a good buy?"
   - Stores explanation

---

## 💡 Use Cases

- Autonomous DeFi buy bot
- AI-powered NFT sniping
- Auto-trader for in-game tokens
- Smart AI Copilot for price-based Web3 logic

---

## 📚 Built With

- Hedera SDK + HCS
- Drizzle ORM + PostgreSQL
- OpenAI GPT / Gemini Pro APIs
- Next.js + Tailwind CSS
- WalletConnect

---

## ✅ Contribution

1. Fork this repo
2. Create your feature branch
3. Commit changes
4. Submit PR with context

---

## 📄 License

MIT — see LICENSE

---

## 📞 Contact

- **Project**: Mira
- **Hackathon**: Hedera Hello Future: Origins
