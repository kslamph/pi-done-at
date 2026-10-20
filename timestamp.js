/**
 * Format a Date using the machine's local timezone.
 *
 * The numeric format is intentionally stable while still reflecting local
 * wall-clock time: YYYY-MM-DD HH:mm:ss.
 */
export function formatCompletionTimestamp(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");

  return `Completed at ${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/**
 * Show a local completion timestamp after Pi finishes all automatic work.
 */
export default function (pi) {
  pi.on("agent_settled", (event, ctx) => {
    if (event.aborted || !ctx.hasUI) return;

    ctx.ui.notify(formatCompletionTimestamp(), "info");
  });
}
