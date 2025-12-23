"use client";

/**
 * Test Page - SmythBot Component Test
 *
 * This page tests the @smythos/chatbot package locally.
 */

import { SmythBot } from "@smythos/chatbot";

/** Agent ID for testing */
const AGENT_ID = "cmihqutkz6qoz9cq3tln7ltsr";

const TestSmythBotPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧪</span>
          <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            SmythBot Component Test
          </h1>
          <span className="rounded-full border border-emerald-500 bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
            Local Package
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">
            SmythBot Component Loaded! 🎉
          </h2>
          <p className="text-zinc-400">
            Check the bottom-right corner for the chat widget.
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Agent ID: <code className="text-cyan-400">{AGENT_ID}</code>
          </p>
        </div>
      </main>

      {/* SmythBot Component - Widget Mode */}
      <SmythBot
        agentId={AGENT_ID}
        domain="https://cmil944nr70e8fzilkr0w632v.agent.pstage.smyth.ai"
        mode="widget"
        enableDebugLogs
        enableMetaMessages
        allowAttachments
        welcomeMessage="Hello! How can I help you today?"
        colors={{
          chatWindowColors: {
            backgroundColor: "#18181b",
            headerBackgroundColor: "#27272a",
            footerBackgroundColor: "#27272a",
          },
          sendButtonColors: {
            backgroundColor: "#10b981",
            textColor: "#ffffff",
          },
          botBubbleColors: {
            textColor: "#ffffff",
            backgroundColorStart: "#6366f1",
            backgroundColorEnd: "#8b5cf6",
          },
          humanBubbleColors: {
            textColor: "#ffffff",
            backgroundColorStart: "#3b82f6",
            backgroundColorEnd: "#2563eb",
          },
          chatTogglerColors: {
            backgroundColor: "#10b981",
            textColor: "#ffffff",
          },
        }}
        onReady={() => console.log("✅ SmythBot is ready!")}
        onError={(error) => console.error("❌ SmythBot error:", error)}
      />

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-600">
        Testing <span className="text-cyan-500">@smythos/chatbot</span> package
      </footer>
    </div>
  );
};

export default TestSmythBotPage;
