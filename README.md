# JAMEAgents - Landing Page

Marketing and demo website for **JAMEAgents**, a VS Code extension that deploys a team of specialized AI agents to design, code, and ship your application from a plain-text spec.

Built for the **Paris-Saclay University Hackathon 2026** by Emmanuelle, Mathusan, Aleksandra, and Jewin.

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Editor | Monaco Editor |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project structure

```
src/
├── pages/          # Route-level pages (HomePage, WorkspacePage)
├── components/     # Shared UI components (Navbar, Hero, Footer, …)
├── context/        # WorkspaceContext — global workspace state
├── types.ts        # Shared TypeScript types
└── mockData.ts     # Mock data for workspace demo
```
