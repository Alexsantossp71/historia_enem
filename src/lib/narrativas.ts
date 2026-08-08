import { readFileSync } from "node:fs";
import { join } from "node:path";

import { getNarrativaBySlug } from "@/data/curso";

const narrativesDirectory = join(process.cwd(), "src", "content", "contos");

/** Reads authored Markdown at build time; pages are exported as static HTML. */
export function getNarrativaContent(slug: string): string | undefined {
  const narrativa = getNarrativaBySlug(slug);

  if (!narrativa) {
    return undefined;
  }

  const source = readFileSync(join(narrativesDirectory, `${slug}.md`), "utf8");

  // The route already presents the narrative title as its page heading.
  return source.replace(/^#\s+.+\n+/, "");
}
