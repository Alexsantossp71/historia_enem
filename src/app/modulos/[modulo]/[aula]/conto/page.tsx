import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/markdown-content";
import {
  getAulaBySlug,
  getModuloBySlug,
  getNarrativaBySlug,
  modulos,
} from "@/data/curso";
import { getNarrativaContent } from "@/lib/narrativas";
import { assetUrl } from "@/lib/site";

interface NarrativePageProps {
  params: Promise<{ modulo: string; aula: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return modulos.flatMap((modulo) =>
    modulo.aulas
      .filter((aula) => getNarrativaBySlug(aula.slug))
      .map((aula) => ({ modulo: modulo.slug, aula: aula.slug })),
  );
}

export async function generateMetadata({
  params,
}: NarrativePageProps): Promise<Metadata> {
  const { modulo: moduleSlug, aula: lessonSlug } = await params;
  const narrativa = getNarrativaBySlug(lessonSlug);
  const aula = getAulaBySlug(moduleSlug, lessonSlug);

  if (!narrativa || !aula) {
    return { title: "Narrativa não encontrada" };
  }

  return {
    title: narrativa.titulo,
    description: `${narrativa.descricao} Leitura complementar da aula ${aula.titulo}.`,
  };
}

export default async function NarrativePage({ params }: NarrativePageProps) {
  const { modulo: moduleSlug, aula: lessonSlug } = await params;
  const modulo = getModuloBySlug(moduleSlug);
  const aula = getAulaBySlug(moduleSlug, lessonSlug);
  const narrativa = getNarrativaBySlug(lessonSlug);
  const content = getNarrativaContent(lessonSlug);

  if (!modulo || !aula || !narrativa || !content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.2),_transparent_30%),linear-gradient(135deg,_#0f172a,_#312e81_55%,_#020617)] pb-20 pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200"
                href="/"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200"
                href="/modulos/"
              >
                Módulos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200"
                href={`/modulos/${modulo.slug}/${aula.slug}/`}
              >
                {aula.titulo}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-slate-200">
              Narrativa
            </li>
          </ol>
        </nav>

        <article className="mx-auto max-w-4xl">
          <header className="rounded-3xl border border-violet-200/15 bg-violet-300/8 p-6 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-200">
              Narrativa histórica de apoio
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              {narrativa.titulo}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-violet-50/80">
              {narrativa.descricao}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-violet-100">
              <span className="rounded-full border border-violet-200/20 bg-violet-200/10 px-3 py-1.5">
                {narrativa.tempoLeitura}
              </span>
              <span className="rounded-full border border-violet-200/20 bg-violet-200/10 px-3 py-1.5">
                Obra de ficção para contextualização
              </span>
            </div>
          </header>

          {narrativa.audio && (
            <section
              className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-6"
              aria-labelledby="audio-title"
            >
              <h2 className="text-lg font-bold text-amber-100" id="audio-title">
                Ouça a narração
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-50/75">
                {narrativa.audio.duracao}
              </p>
              <audio className="mt-4 w-full" controls preload="metadata">
                <source src={assetUrl(narrativa.audio.src)} type="audio/wav" />
                Seu navegador não suporta áudio HTML5.
              </audio>
            </section>
          )}

          <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/35 p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
            <MarkdownContent content={content} />
          </div>

          <aside className="mt-6 rounded-2xl border border-sky-300/20 bg-sky-400/10 p-6">
            <h2 className="font-bold text-sky-100">Como usar esta leitura</h2>
            <p className="mt-2 leading-7 text-sky-50/80">
              A narrativa é uma obra de ficção baseada em temas históricos.
              Use-a para relembrar contextos e conceitos, mas confira a aula e
              fontes confiáveis ao estudar informações específicas.
            </p>
          </aside>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
            <Link
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center font-semibold text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200"
              href={`/modulos/${modulo.slug}/${aula.slug}/`}
            >
              ← Voltar para a aula
            </Link>
            <Link
              className="rounded-xl bg-gradient-to-r from-violet-300 to-fuchsia-300 px-5 py-3 text-center font-bold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-100"
              href={`/modulos/${modulo.slug}/`}
            >
              Ver módulo
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
