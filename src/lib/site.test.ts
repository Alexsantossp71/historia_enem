import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

beforeEach(() => {
  vi.unstubAllEnvs();
  delete process.env.NEXT_PUBLIC_BASE_PATH;
  delete process.env.NEXT_PUBLIC_SITE_ORIGIN;
  delete process.env.GITHUB_ACTIONS;
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("site.ts — basePath", () => {
  it("returns empty string in local dev", async () => {
    const { basePath } = await import("@/lib/site");
    expect(basePath).toBe("");
  });

  it("returns /historia_enem in GitHub Actions", async () => {
    process.env.GITHUB_ACTIONS = "true";
    vi.stubEnv("GITHUB_ACTIONS", "true");
    const { basePath } = await import("@/lib/site");
    expect(basePath).toBe("/historia_enem");
  });

  it("uses NEXT_PUBLIC_BASE_PATH when set", async () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "  /custom-path  ";
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "  /custom-path  ");
    const { basePath } = await import("@/lib/site");
    expect(basePath).toBe("/custom-path");
  });
});

describe("site.ts — assetUrl", () => {
  it("prepends basePath to absolute paths", async () => {
    const { assetUrl } = await import("@/lib/site");
    expect(assetUrl("/logo.svg")).toBe("/logo.svg");
  });

  it("adds leading slash when missing", async () => {
    const { assetUrl } = await import("@/lib/site");
    expect(assetUrl("logo.svg")).toBe("/logo.svg");
  });
});

describe("site.ts — absoluteUrl", () => {
  it("returns full URL with siteUrl prefix", async () => {
    const { absoluteUrl } = await import("@/lib/site");
    expect(absoluteUrl("/modulos/")).toBe(
      "https://alexsantossp71.github.io/historia_enem/modulos/",
    );
  });

  it("defaults to root path", async () => {
    const { absoluteUrl } = await import("@/lib/site");
    expect(absoluteUrl()).toBe(
      "https://alexsantossp71.github.io/historia_enem/",
    );
  });
});
