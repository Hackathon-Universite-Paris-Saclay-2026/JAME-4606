export default function Hero() {
  return (
    <div className="mb-10 text-center relative max-w-4xl mx-auto">
      <div className="inline-block border-2 border-black bg-amber-200 px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6 relative z-10">
        ✦ VS Code Extension
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-[0.9] mb-10 relative z-10">
        Agentic software<br />
        <span className="text-cyan-400">engineering</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 relative z-10">
        Input your specs and sketches. A team of coding agents collaborates to design, code, and deploy your entire application - right inside VS Code.
      </p>
      <div className="flex flex-wrap justify-center gap-4 relative z-10">
        <a
          href="/jame-workflow-extension-0.0.1.vsix"
          download="jame-workflow-extension-0.0.1.vsix"
          className="inline-flex items-center gap-2 text-black border-2 border-black font-bold px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all text-base"
          style={{ backgroundColor: '#a7cefd' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download for VS Code
        </a>
        <a
          href="https://github.com/Hackathon-Universite-Paris-Saclay-2026/JAME"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black border-2 border-black font-bold px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all text-base"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
      <img src="/sparkle-green.svg" alt="" className="absolute -top-10 left-0 md:left-12 lg:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      <img src="/sparkle-red.svg" alt="" className="absolute top-20 right-0 md:right-12 lg:right-14 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
    </div>
  );
}
