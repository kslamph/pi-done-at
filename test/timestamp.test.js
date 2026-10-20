import assert from "node:assert/strict";
import test from "node:test";
import { formatCompletionTimestamp } from "../timestamp.js";

test("formats a completion timestamp in the user's local timezone", () => {
  const date = new Date(2026, 9, 20, 16, 42, 31);

  assert.equal(
    formatCompletionTimestamp(date),
    "Completed at 2026-10-20 16:42:31",
  );
});
