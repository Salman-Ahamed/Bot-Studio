"use client";

import { getAgentDomain, type Agent } from "@/lib/agents";
import Script from "next/script";
import { useCallback, useState } from "react";

interface WidgetChatbotProps {
  agent: Agent;
}

/**
 * Widget Chatbot Client Component
 * Handles the interactive widget loading and initialization
 */
const STORAGE_KEY = "widget-isChatOnly";

// Helper to get value from localStorage
const getStoredValue = (): boolean => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null ? stored === "true" : true;
  }
  return true;
};

export const WidgetChatbot = ({ agent }: WidgetChatbotProps) => {
  const [isChatOnly] = useState(getStoredValue);
  const agentDomain = getAgentDomain(agent.id);

  /**
   * Toggle isChatOnly value, save to localStorage, and reload page
   */
  const handleToggle = useCallback(() => {
    const newValue = !isChatOnly;
    localStorage.setItem(STORAGE_KEY, String(newValue));
    window.location.reload();
  }, [isChatOnly]);

  /**
   * Initialize chatbot widget after script loads
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

  return (
    <>
      {/* Toggle Button - Absolute Top Left */}
      <button
        onClick={handleToggle}
        className="absolute left-2 top-2 z-50 rounded bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-md hover:bg-blue-600 transition-colors"
      >
        {isChatOnly ? "Chat Only: ON" : "Chat Only: OFF"}
      </button>

      <div id="widget-chatbot" />

      {/* Load Chatbot Script */}
      <Script
        src={`https://${agentDomain}/static/embodiment/chatBot/chatbot-v2.js`}
        onLoad={initChatbot}
        strategy="afterInteractive"
      />
    </>
  );
};
