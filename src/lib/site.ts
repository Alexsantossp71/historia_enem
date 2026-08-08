const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const fallbackBasePath =
  process.env.GITHUB_ACTIONS === "true" ? "/historia_enem" : "";

/**
 * Path prefix used by GitHub Pages. It stays empty in local development and
 * is injected by the deployment workflow, so forks do not need source edits.
 * The fallback keeps the current repository working with its existing Pages
 * workflow until the enhanced workflow is applied manually.
 */
export const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : fallbackBasePath;

const configuredSiteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN?.replace(
  /\/$/,
  "",
);

export const siteOrigin =
  configuredSiteOrigin ?? "https://alexsantossp71.github.io";

// The default points at this repository's public Pages URL. Deploy workflows
// set both variables, allowing forks and custom domains to override it.
export const siteUrl = configuredSiteOrigin
  ? `${siteOrigin}${basePath}`
  : "https://alexsantossp71.github.io/historia_enem";

export function assetUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${basePath}${path}`;
}

export function absoluteUrl(pathname = "/"): string {
  return `${siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
