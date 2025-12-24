type TProps = { agentCount: number };

export const Header = ({ agentCount }: TProps) => (
  <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
    <div className="flex items-center gap-3">
      <span className="text-2xl">⚡</span>
      <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
        Bot Studio
      </h1>
      <span className="rounded-full border border-violet-500 bg-violet-500/20 px-2 py-0.5 text-xs text-violet-400">
        Multi-Agent
      </span>
    </div>
    <div className="flex items-center gap-2 text-sm text-zinc-500">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-800 text-xs font-medium text-zinc-300">
        {agentCount}
      </span>
      <span>Active Agents</span>
    </div>
  </header>
);
