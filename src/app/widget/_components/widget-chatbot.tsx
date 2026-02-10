"use client";

import { getAgentDomain, type Agent } from "@/lib/agents";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

interface WidgetChatbotProps {
  agent: Agent;
}

/**
 * Widget Chatbot Client Component
 * Handles the interactive widget loading and initialization
 */
export const WidgetChatbot = ({ agent }: WidgetChatbotProps) => {
  const [isChatOnly, setIsChatOnly] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const agentDomain = getAgentDomain(agent.id);

  /**
   * Initialize chatbot widget - memoized with useCallback
   * Re-creates when isChatOnly or agentDomain changes
   */
  const initChatbot = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ChatBot = (window as any).ChatBot;
    if (ChatBot) {
      ChatBot.init({
        domain: agentDomain,
        isChatOnly: isChatOnly,
        allowAttachments: true,
        enableDebugLogs: true,
        enableMetaMessages: true,
        containerId: "widget-chatbot",
      });
    }
  }, [agentDomain, isChatOnly]);

  /**
   * Re-initialize chatbot when isChatOnly state changes
   */
  useEffect(() => {
    if (isScriptLoaded) initChatbot();
  }, [isScriptLoaded, initChatbot]);

  /**
   * Handle script load event
   */
  const handleScriptLoad = useCallback(() => setIsScriptLoaded(true), []);

  return (
    <>
      {/* Toggle Button - Absolute Top Left */}
      <button
        onClick={() => setIsChatOnly(!isChatOnly)}
        className="absolute left-2 top-2 z-50 rounded bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-md hover:bg-blue-600 transition-colors"
      >
        {isChatOnly ? "Chat Only: ON" : "Chat Only: OFF"}
      </button>

      <div id="widget-chatbot" className="h-full w-full" />

      {/* Load Chatbot Script */}
      <Script
        src={`https://${agentDomain}/static/embodiment/chatBot/chatbot-v2.js`}
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
    </>
  );
};
