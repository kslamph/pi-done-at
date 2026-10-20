/** Format a completion time using the machine's local timezone. */
export function formatDoneAt(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");

  return `※ Done at ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/** Show the local completion time after Pi finishes all automatic work. */
export default function (pi) {
  pi.on("agent_settled", (event, ctx) => {
    if (event.aborted || !ctx.hasUI) return;

    ctx.ui.notify(formatDoneAt(), "info");
  });
}
