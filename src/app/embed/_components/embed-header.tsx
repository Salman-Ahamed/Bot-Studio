/**
 * EmbedHeader Component Props
 */
interface EmbedHeaderProps {
  /** Page title */
  title?: string;
  /** Badge text */
  badge?: string;
  /** Header icon emoji */
  icon?: string;
}

/**
 * EmbedHeader Component
 * Displays the page header with title and badge
 */
export function EmbedHeader({
  title = "Bot Studio - Embed",
  badge = "Iframe Method",
  icon = "🖼️",
}: EmbedHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
          {title}
        </h1>
        <span className="rounded-full border border-cyan-500 bg-cyan-500/20 px-2 py-0.5 text-xs text-cyan-400">
          {badge}
        </span>
      </div>
    </header>
  );
}

