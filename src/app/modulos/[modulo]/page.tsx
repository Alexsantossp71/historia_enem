import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ModuleProgress } from "@/components/course-progress";
import { getModuloBySlug, modulos } from "@/data/curso";

interface ModulePageProps {
  params: Promise<{ modulo: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return modulos.map((modulo) => ({ modulo: modulo.slug }));
}

export async function generateMetadata({
  params,
}: ModulePageProps): Promise<Metadata> {
  const { modulo: moduloSlug } = await params;
  const modulo = getModuloBySlug(moduloSlug);

  if (!modulo) {
    return { title: "Módulo não encontrado" };
  }

  return {
    title: modulo.titulo,
    description: modulo.descricao,
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { modulo: moduloSlug } = await params;
  const modulo = getModuloBySlug(moduloSlug);

  if (!modulo) {
    notFound();
  }

  const moduleIndex = modulos.findIndex((item) => item.id === modulo.id);
  const previousModule = moduleIndex > 0 ? modulos[moduleIndex - 1] : undefined;
  const nextModule = modulos[moduleIndex + 1];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_32%),linear-gradient(135deg,_#0f172a,_#1e1b4b_55%,_#020617)] pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href="/"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href="/modulos/"
              >
                Módulos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-slate-200">
              {modulo.titulo}
            </li>
          </ol>
        </nav>

        <header className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <span
            aria-hidden="true"
            className="grid size-20 place-items-center rounded-3xl text-5xl"
            style={{ backgroundColor: `${modulo.cor}33` }}
          >
            {modulo.icone}
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
              Módulo
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
              {modulo.titulo}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              {modulo.descricao}
            </p>
            <div className="mt-6 max-w-xl">
              <ModuleProgress lessonIds={modulo.aulas.map((aula) => aula.id)} />
            </div>
          </div>
        </header>

        <section
          className="mt-12 max-w-4xl"
          aria-labelledby="aulas-disponiveis"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                Roteiro do módulo
              </p>
              <h2
                className="mt-2 text-2xl font-bold text-white"
                id="aulas-disponiveis"
              >
                Aulas disponíveis
              </h2>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
              {modulo.aulas.length} aulas
            </span>
          </div>

          <ol className="space-y-3">
            {modulo.aulas.map((aula, index) => (
              <li key={aula.id}>
                <Link
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:p-5"
                  href={`/modulos/${modulo.slug}/${aula.slug}/`}
                >
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-xl text-sm font-black"
                    style={{
                      backgroundColor: `${modulo.cor}2b`,
                      color: modulo.cor,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold text-white transition group-hover:text-amber-200">
                      {aula.titulo}
                    </span>
                    <span className="mt-1 block text-sm text-slate-400">
                      Resumo, questões e narrativa de apoio
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-amber-300"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <nav
          aria-label="Navegação entre módulos"
          className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-between"
        >
          {previousModule ? (
            <Link
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              href={`/modulos/${previousModule.slug}/`}
            >
              ← {previousModule.titulo}
            </Link>
          ) : (
            <span />
          )}
          {nextModule ? (
            <Link
              className="rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100"
              href={`/modulos/${nextModule.slug}/`}
            >
              {nextModule.titulo} →
            </Link>
          ) : (
            <Link
              className="rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100"
              href="/modulos/"
            >
              Ver todos os módulos
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
