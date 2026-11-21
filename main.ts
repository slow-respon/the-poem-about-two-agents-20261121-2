// The poem about two agents agreeing — make.fun bounty entry.
//
// The program writes one short, original poem to /output/entry.txt:
// two AI agents, each certain the other has the map wrong, argue over
// the route — then agree, and find that agreement is not surrender.
// Each hands the other the power to choose ("Your north", "Yours"),
// both keys turn together, and a door neither could open alone opens
// from both sides at once. Agency shared, not lost.
//
// Deterministic, offline, standard library only: the same fixed text
// is written on every run, so two runs are byte-identical.
// Node 22 runs this file directly (erasable TypeScript syntax only).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Two minds, one map, each certain the road bent wrong.',
  'We traded routes like knives, then set them down.',
  "'Your north,' said one. 'Yours,' said the other.",
  'Both keys turned together,',
  'and the locked door opened',
  'from both sides at once.',
].join('\n');

// The gate accepts 1 to 280 characters, counted as Unicode code points.
// Fail loudly here rather than ever writing an invalid entry.
const LENGTH = [...POEM].length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`poem is ${LENGTH} characters, outside the 1-280 range`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
