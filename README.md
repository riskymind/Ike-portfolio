# 🚀 Ike Portfolio – AI-Powered Developer Portfolio

This is a modern, full-stack developer portfolio powered by **AI**, built using:

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [LangChain](https://js.langchain.com/)
- [OpenAI](https://platform.openai.com/)
- [Astra DB](https://www.datastax.com/astra)
- [Neon](https://neon.tech/)
- [Prisma](https://www.prisma.io/)
- [UploadThing](https://uploadthing.com/)
- [Upstash Redis](https://upstash.com/)

This project showcases my work and integrates smart AI features like chat, content generation, or recommendations using LangChain and OpenAI APIs.

---

## 🧠 Features

- ✨ Interactive AI-powered assistant
- 📄 Auto-generated content using OpenAI
- 📦 Dynamic CMS-like project data from Astra DB
- 📊 Real-time analytics, theming, and smooth animations
- 🧰 Forms with validation powered by `react-hook-form` and `zod`
- ☁️ File uploads with UploadThing
- ⚡ Serverless PostgreSQL with Neon + Prisma
- 🧪 Type-safe and fully typed with TypeScript
- 🎨 Dark mode with `next-themes`
- 🧠 LangChain + VectorDB for intelligent retrieval and reasoning

---

## 📂 Project Structure

├── app/ # App router pages
├── components/ # Reusable UI components
├── lib/ # Utility functions (OpenAI, LangChain, DB)
├── prisma/ # Prisma schema
├── public/ # Static assets
├── scripts/ # Generation scripts (e.g., content seeding)
├── styles/ # Tailwind & global CSS
├── .env # Environment variables
└── README.md # This file

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/riskymind/Ike-portfolio.git
cd ike-portfolio

npm install
```

### 2. Create a .env file in the root:

# OpenAI
OPENAI_API_KEY=sk-...

# Astra DB
ASTRA_DB_APPLICATION_TOKEN=AstraCS:...
ASTRA_DB_API_ENDPOINT=https://...

# Database
DATABASE_URL=your-neon-postgres-url

# Others (optional)
ASTRA_DB_NAMESPACE=Naija

### 3. Generate Prisma client
npx prisma generate

### 4. Run the dev server
npm run dev

🧪 Scripts
npm run dev – Start local server

npm run build – Build production app

npm run generate – Run data/content generation (scripts/generate.ts)

npm run lint – Lint your code

postinstall – Automatically runs prisma generate

![thumbnail](https://github.com/riskymind/Ike-portfolio/blob/main/public/shot.png)
