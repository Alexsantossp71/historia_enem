import type { MetadataRoute } from "next";

import { modulos } from "@/data/curso";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/modulos/"];
  const moduleRoutes = modulos.map((modulo) => `/modulos/${modulo.slug}/`);
  const lessonRoutes = modulos.flatMap((modulo) =>
    modulo.aulas.flatMap((aula) => [
      `/modulos/${modulo.slug}/${aula.slug}/`,
      `/modulos/${modulo.slug}/${aula.slug}/conto/`,
    ]),
  );

  return [...staticRoutes, ...moduleRoutes, ...lessonRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : route === "/modulos/" ? 0.9 : 0.7,
  }));
}
