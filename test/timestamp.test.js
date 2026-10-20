import assert from "node:assert/strict";
import test from "node:test";
import { formatDoneAt } from "../timestamp.js";

test("formats a completion time in the user's local timezone", () => {
  const date = new Date(2026, 9, 20, 16, 42, 31);

  assert.equal(formatDoneAt(date), "※ Done at 16:42:31");
});
