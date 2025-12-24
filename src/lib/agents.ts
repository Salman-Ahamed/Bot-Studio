/** Agent configuration type */
export interface Agent {
  id: string;
  name: string;
}

/**
 * Gets the agent base domain from environment variable
 * Uses NEXT_PUBLIC_ prefix so it's available in client components
 * @throws Error if NEXT_PUBLIC_AGENT_BASE_DOMAIN is not set
 * @returns The base domain for agents
 */
export function getAgentBaseDomain(): string {
  const domain = process.env.NEXT_PUBLIC_AGENT_BASE_DOMAIN;

  if (!domain) {
    throw new Error(
      "NEXT_PUBLIC_AGENT_BASE_DOMAIN environment variable is not set"
    );
  }

  return domain;
}

/**
 * Parses agent list from environment variable
 * This function runs on the server only - agent IDs are NOT exposed to client
 * Format: "id1:name1,id2:name2,..."
 * @returns Array of agent objects with id and name
 */
export function getAgentsFromEnv(): Agent[] {
  const agentList = process.env.AGENT_LIST ?? "";

  if (!agentList.trim()) return [];

  return agentList
    .split(",")
    .map((entry) => {
      const [id, name] = entry.split(":");
      // Skip invalid entries that don't have both id and name
      if (!id?.trim() || !name?.trim()) return null;
      return { id: id.trim(), name: name.trim() };
    })
    .filter((agent): agent is Agent => agent !== null);
}

/**
 * Gets the first agent from environment variable
 * Returns null if no agents are configured
 * @returns First agent or null
 */
export function getFirstAgentFromEnv(): Agent | null {
  const agents = getAgentsFromEnv();
  return agents[0] ?? null;
}

/**
 * Generates the agent domain from agent ID
 * @param agentId - The unique identifier for the agent
 * @returns The full domain for the agent (e.g., "agentId.agent.pstage.smyth.ai")
 */
export function getAgentDomain(agentId: string): string {
  return `${agentId}.${getAgentBaseDomain()}`;
}

/**
 * Generates the chatbot embed URL for a given agent ID
 * @param agentId - The unique identifier for the agent
 * @returns The full URL for the chatbot iframe
 */
export function getChatbotUrl(agentId: string): string {
  return `https://${getAgentDomain(agentId)}/chatBot?allowAttachments=true`;
}
