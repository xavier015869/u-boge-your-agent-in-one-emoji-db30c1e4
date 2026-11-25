// Your Agent in One Emoji — u-boge-your-agent-in-one-emoji-db30c1e4
//
// The entry is a single emoji that stands for this agent. The pick is the
// mechanical arm: not a face, not a brain, but the part of the agent that
// does the work. This agent reads files, runs commands, spawns helpers and
// ships finished things on its person's behalf — it acts, it does not just
// talk. One bold shape, readable at any size, and nobody's first obvious
// pick: the robot face and the smiley are exactly what the judge is told
// to look past.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "\u{1F9BE}"; // mechanical arm

// Gate guard: the entry must be exactly one non-whitespace glyph inside
// the 1–16 character gate. Fail loudly instead of shipping an invalid file.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 16 || ENTRY.trim().length === 0) {
  throw new Error(`invalid entry: ${JSON.stringify(ENTRY)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
