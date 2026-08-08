import Link from "next/link";

import { CourseProgress } from "@/components/course-progress";
import {
  aulas,
  getTotalAtividades,
  getTotalAulas,
  modulos,
} from "@/data/curso";

export const metadata = {
  title: "Módulos",
  description:
    "Explore os módulos e aulas do curso gratuito de História para o ENEM.",
};

export default function ModulosPage() {
  const totalAulas = getTotalAulas();
  const totalAtividades = getTotalAtividades();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_28%),linear-gradient(135deg,_#0f172a,_#1e1b4b_55%,_#020617)] pb-20 pt-28">
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
            <li aria-current="page" className="font-medium text-slate-200">
              Módulos
            </li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
            Seu mapa de estudos
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Todos os módulos
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Organize sua revisão por tema. Cada aula reúne síntese, dica de
            prova, atividade interativa e uma narrativa de apoio.
          </p>
        </header>

        <section
          aria-label="Resumo do curso"
          className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.65fr]"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-slate-300">Catálogo atual</p>
            <p className="mt-2 text-3xl font-black text-white">
              {totalAulas} aulas
            </p>
            <p className="mt-2 leading-6 text-slate-400">
              {totalAtividades} atividades para revisar e praticar.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-6">
            <CourseProgress lessonIds={aulas.map((aula) => aula.id)} />
          </div>
        </section>

        <section className="mt-12" aria-labelledby="lista-modulos">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white" id="lista-modulos">
                Escolha um tema
              </h2>
              <p className="mt-1 text-slate-400">
                Você pode seguir a ordem ou priorizar os assuntos que precisa
                revisar.
              </p>
            </div>
            <a
              className="text-sm font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-4 transition hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
              rel="noreferrer"
              target="_blank"
            >
              Consulte o ENEM no Inep ↗
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {modulos.map((modulo) => (
              <Link
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-2xl hover:shadow-slate-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href={`/modulos/${modulo.slug}/`}
                key={modulo.id}
              >
                <div className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="grid size-16 shrink-0 place-items-center rounded-2xl text-4xl"
                    style={{ backgroundColor: `${modulo.cor}2b` }}
                  >
                    {modulo.icone}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white transition group-hover:text-amber-200">
                      {modulo.titulo}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {modulo.descricao}
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
                    {modulo.aulas.length} aulas
                  </span>
                  <span className="font-bold text-amber-300 transition group-hover:translate-x-1">
                    Ver aulas <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <aside className="mt-12 rounded-2xl border border-amber-300/20 bg-gradient-to-r from-amber-400/12 to-orange-400/8 p-6">
          <h2 className="text-lg font-bold text-amber-100">
            Dica para estudar melhor
          </h2>
          <p className="mt-2 max-w-3xl leading-7 text-amber-50/80">
            Em vez de decorar listas, compare processos históricos: quem
            participava, quais interesses estavam em disputa e quais foram as
            consequências. Essa leitura crítica é especialmente útil nas
            questões do ENEM.
          </p>
        </aside>
      </div>
    </div>
  );
}
