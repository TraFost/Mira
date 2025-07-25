# TrustDocs 🚀

AI-powered contract notary & risk intelligence tool
Upload contracts, get AI-driven insights, and anchor them on Hedera.

---

## 🔍 Overview

TrustDocs lets users upload agreements (loan papers, invoices, NDAs), extracts key data via AI, assesses risk, and writes a verifiable summary on Hedera’s File and Consensus Services. Users authenticate through their Hedera wallet—no email sign-up required.

---

## ⚙️ Features

- **Document Upload** (PDF or plain text)
- **LLM Extraction**: Party A, Party B, amount, dates, etc.
- **Risk Scoring**: Flag issues like missing fields or high-risk amounts
- **On‑Chain Notarization**:
  - Hedera File Service: store structured summary
  - Hedera Consensus Service: log AI verdict

- **Database Logging**: Supabase tracks contracts, risk levels, and transaction IDs
- **Wallet-based Auth**: Authenticate using Blade or WalletConnect (no passwords)

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- Yarn or npm
- Active Supabase project
- Gemini API key
- Hedera testnet credentials

### Installation

```bash
git clone https://github.com/your-username/trustdocs.git
cd trustdocs
cp .env.example .env
npm install
npm run dev
```

### Usage

1. Navigate to `http://localhost:3000`
2. Connect your Hedera wallet
3. Upload a contract
4. View AI-extracted fields, risk verdict, Supabase record, and Hedera transaction details

---

---

## 🧹 Architecture

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Next.js API Routes (Node.js)
- **AI**: Gemini
- **Storage / DB**: Supabase PostgreSQL + Storage
- **Blockchain**: Hedera JS SDK (File & Consensus Services)
- **Wallet Integration**: Blade Labs SDK or WalletConnect

---

## 🧰 How It Works

1. User connects wallet
2. Uploads contract document
3. System calls AI to extract structured data
4. Risk logic evaluates and tags verdict
5. Summary and hash stored via Hedera File Service
6. Verdict logged using Hedera Consensus Service
7. All records saved in Supabase for dashboard display

---

## 🧳️ Use Cases

- Automated legal audit & notary trail
- Risk checks for lending or Web3 agreements
- DAO agreement logging
- ESG & compliance documentation

---

## 📚 Inspiration & Resources

- Built for **Hedera Hello Future: Origins Hackathon**, AI & Agents track
- Hedera File Service / Consensus official docs
- Gemini LLM integration
- Supabase for database and file storage

---

## ✅ Contribution

Feedback and pull requests are welcome! If you want to contribute:

1. Fork the repo
2. Create a feature branch
3. Submit a pull request
4. Verify with tests or local demo

---

## 📄 License

MIT License – see `LICENSE` file for details.

---
