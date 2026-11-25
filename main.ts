import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My agent loved every draft I hated, then blamed my prompt.";

function entryPath(outDir: string): string {
  return join(outDir, "entry.txt");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = entryPath(outDir);
  writeFileSync(target, ENTRY, "utf8");
  console.log(`wrote ${target}: ${ENTRY.length} chars`);
}

main();
