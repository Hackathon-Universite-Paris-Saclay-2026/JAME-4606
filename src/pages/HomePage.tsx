import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const features = [
  {
    icon: '',
    title: 'Multi-Agent Collaboration',
    description: 'A team of specialized AI agents works in parallel to design, code, and review your application.',
    color: 'bg-violet-200',
  },
  {
    icon: '',
    title: 'Spec-to-Code',
    description: 'Describe your app with plain text or upload a sketch. Agents translate your vision into production-ready code.',
    color: 'bg-rose-200',
  },
  {
    icon: '',
    title: 'Integrated Workspace',
    description: 'Files, contexts, and agent tools all live inside VS Code. No context-switching, no extra setup.',
    color: 'bg-sky-200',
  },
  {
    icon: '',
    title: 'One-Click Deploy',
    description: 'Ship your application the moment agents are done. From idea to production in minutes.',
    color: 'bg-teal-200',
  },
];

const steps = [
  {
    number: '01',
    title: 'Describe your app',
    description: 'Write your specs in plain language or upload a wireframe sketch directly in VS Code.',
    color: 'bg-rose-200',
  },
  {
    number: '02',
    title: 'Agents collaborate',
    description: 'JAME dispatches a crew of AI agents that design the architecture, write code, and run tests autonomously.',
    color: 'bg-sky-200',
  },
  {
    number: '03',
    title: 'Ship it',
    description: 'Review the result, tweak if needed, and deploy - or export the source code and take full ownership.',
    color: 'bg-amber-200',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-4">
        {/* Hero */}
        <section className="max-w-4xl mx-auto pt-20 pb-16">
          <Hero />
        </section>

        {/* Features */}
        <section id="features" className="max-w-4xl mx-auto pb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black text-center mb-3">
            Everything you need to ship faster
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            One extension. A full team of agents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className={`${f.color} border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-black text-black mb-2">{f.title}</h3>
                <p className="text-gray-800 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="max-w-4xl mx-auto pb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black text-center mb-3">
            How it works
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            From idea to deployed app in three steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.number}
                className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4"
              >
                <div className={`${s.color} border-2 border-black w-12 h-12 flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                  {s.number}
                </div>
                <h3 className="text-xl font-black text-black">{s.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto pb-20">
          <div className="border-2 border-black bg-violet-200 p-6 sm:p-8 md:p-12 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-4">Ready to build?</h2>
            <p className="text-black text-lg mb-8 max-w-xl mx-auto">
              Install the JAMEAgents extension and let your AI crew handle the heavy lifting.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=JAME.jame-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white border-2 border-black font-bold px-5 py-3 sm:px-8 sm:py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-all text-base sm:text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download for VS Code - it's free
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
