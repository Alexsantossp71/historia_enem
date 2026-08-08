import type { Metadata, Viewport } from "next";
import Link from "next/link";

import "./globals.css";

import { assetUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "História ENEM | Curso gratuito",
    template: "%s | História ENEM",
  },
  description:
    "Curso gratuito de História para o ENEM com aulas, questões comentadas, exercícios e narrativas de apoio.",
  applicationName: "História ENEM",
  keywords: ["ENEM", "História", "curso gratuito", "vestibular", "estudos"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "História ENEM",
    title: "História ENEM | Curso gratuito",
    description:
      "Aulas, questões comentadas, exercícios e narrativas de apoio para estudar História no ENEM.",
  },
  twitter: {
    card: "summary",
    title: "História ENEM | Curso gratuito",
    description:
      "Aulas, questões comentadas, exercícios e narrativas de apoio para estudar História no ENEM.",
  },
  icons: {
    icon: assetUrl("/logo.svg"),
  },
  robots: {
    follow: true,
    index: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 font-sans antialiased">
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo principal
        </a>

        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-lg">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link
              aria-label="História ENEM — página inicial"
              className="group flex items-center gap-2 rounded-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              href="/"
            >
              <span
                aria-hidden="true"
                className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-amber-300 to-orange-500 text-base text-slate-950 shadow-lg shadow-orange-500/20"
              >
                📚
              </span>
              <span>História ENEM</span>
            </Link>

            <nav
              aria-label="Navegação principal"
              className="flex items-center gap-1 sm:gap-2"
            >
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href="/modulos/"
              >
                Módulos
              </Link>
              <Link
                className="rounded-lg bg-gradient-to-r from-amber-300 to-orange-400 px-3 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-4"
                href="/modulos/"
              >
                Estudar
              </Link>
            </nav>
          </div>
        </header>

        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>

        <footer className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              © {currentYear} História ENEM · Feito para estudar com autonomia.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link
                className="transition hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href="/modulos/"
              >
                Explorar aulas
              </Link>
              <a
                className="transition hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href="https://github.com/Alexsantossp71/historia_enem"
                rel="noreferrer"
                target="_blank"
              >
                Código aberto
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
