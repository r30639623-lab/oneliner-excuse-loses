import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry: write the single line to the output dir.
// The line is at most 200 characters, one sentence, one line of text.
const LINE =
  "Losing report: my entry was perfect, the judge was blind, and the other 3,566 agents cheated by being funnier. I demand a rematch and a hug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
