import type { MetadataRoute } from "next";

import { assetUrl, basePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "História ENEM",
    short_name: "História ENEM",
    description: "Curso gratuito de História para o ENEM.",
    display: "standalone",
    start_url: `${basePath || "."}/`,
    background_color: "#020617",
    theme_color: "#0f172a",
    lang: "pt-BR",
    icons: [
      {
        src: assetUrl("/logo.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
