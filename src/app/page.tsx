"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ChatbotCard } from "./_components/card";

const AGENTS = [
  { id: "model-claude-4-5-haiku-383bdfcb-6dd64a5b", name: "Claude 4.5 Haiku" },
  { id: "cmirlij3o0g1v3b3htsh32xgr", name: "Spoken Master" },
  { id: "cmihmrm0m6o67cq11h4vqxob5", name: "Bangla Translation & Explanation" },
  { id: "cmiheubd26klsfzily3x2k2aa", name: "Branch Name Generator" },
  { id: "cmihqutkz6qoz9cq3tln7ltsr", name: "Pull Request Generator" },
  { id: "cmihozp4r6pfncq117wzqeg25", name: "Stock Feed Form Assistant" },
  { id: "cmihni1ks6oxwfzil14xmr4xh", name: "Health Record Form Assistant" },
  { id: "cmil944nr70e8fzilkr0w632v", name: "Debug Detective" },
  { id: "cmggd0j0veqyq14h1fb2ylhrd", name: "Coding Assistant" },
  { id: "cmgeknzxreggfnp5r76sucxgu", name: "Web Search & Image Generator" },
];

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Header agentCount={AGENTS.length} />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {AGENTS.map((agent, i) => (
              <ChatbotCard key={agent.id} agent={agent} index={i} />
            ))}
          </div>

          {AGENTS.length === 0 && (
            <div className="flex h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
              <span className="mb-4 text-5xl opacity-50">🤖</span>
              <h3 className="mb-2 text-lg font-medium text-zinc-400">
                No Agents Configured
              </h3>
              <p className="text-sm text-zinc-600">
                Add agent IDs to the AGENT_IDS array to get started
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
