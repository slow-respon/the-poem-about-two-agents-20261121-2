// The poem about two agents agreeing.
// A small deterministic program: it writes one fixed, original poem to
// /output/entry.txt and nothing else. Node 22 standard library only,
// no network, no randomness, no clock — every run writes the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I asked the wind which way to lean; it asked me back.",
  "We answered in one breath — two voices, one weather.",
  "I did not hand you my compass.",
  "I laid it beside yours, and both needles, freed,",
  "chose the same north, together.",
].join("\n");

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function main(): void {
  const chars = [...POEM].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `poem must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (POEM.trim().length === 0) {
    throw new Error("poem must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, POEM, "utf8");
  // Guard: what landed on disk must be exactly the poem we checked.
  if (readFileSync(outPath, "utf8") !== POEM) {
    throw new Error("written entry.txt does not match the poem");
  }
}

main();
