import { ChatbotCard } from "@/components/chatbot-card";

/**
 * Agent IDs for all chatbots
 * Add new agent IDs here to display more chatbots in the grid
 */
const AGENT_IDS = [
  "cmgeknzxreggfnp5r76sucxgu",
  // Add more agent IDs here:
  // "another-agent-id",
  // "yet-another-agent-id",
];

/**
 * Bot Studio Home Page
 * Displays chatbots in a grid layout for testing and demonstration
 */

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            Bot Studio
          </h1>
          <span className="rounded-full border border-violet-500 bg-violet-500/20 px-2 py-0.5 text-xs text-violet-400">
            v1.0
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-500">
            {AGENT_IDS.length} Active Bot{AGENT_IDS.length > 1 ? "s" : ""}
          </span>
        </div>
      </header>

      {/* Main Content - Chatbot Grid */}
      <main className="flex-1 p-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
          {AGENT_IDS.map((agentId, index) => (
            <ChatbotCard key={agentId} agentId={agentId} index={index} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-600">
        Powered by <span className="text-cyan-500">SmythOS</span>
      </footer>
    </div>
  );
};

export default Home;
