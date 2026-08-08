import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LessonCompletion } from "@/components/course-progress";
import { MarkdownContent } from "@/components/markdown-content";
import {
  getAulaBySlug,
  getModuloBySlug,
  getNarrativaBySlug,
  modulos,
} from "@/data/curso";

import { ExercicioComponent, QuestaoComponent } from "./components";

interface LessonPageProps {
  params: Promise<{ modulo: string; aula: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return modulos.flatMap((modulo) =>
    modulo.aulas.map((aula) => ({ modulo: modulo.slug, aula: aula.slug })),
  );
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { modulo: moduleSlug, aula: lessonSlug } = await params;
  const aula = getAulaBySlug(moduleSlug, lessonSlug);

  if (!aula) {
    return { title: "Aula não encontrada" };
  }

  return {
    title: aula.titulo,
    description: aula.dicaEnem,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { modulo: moduleSlug, aula: lessonSlug } = await params;
  const modulo = getModuloBySlug(moduleSlug);
  const aula = getAulaBySlug(moduleSlug, lessonSlug);

  if (!modulo || !aula) {
    notFound();
  }

  const lessonIndex = modulo.aulas.findIndex((item) => item.id === aula.id);
  const previousLesson =
    lessonIndex > 0 ? modulo.aulas[lessonIndex - 1] : undefined;
  const nextLesson = modulo.aulas[lessonIndex + 1];
  const narrativa = getNarrativaBySlug(aula.slug);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.16),_transparent_25%),linear-gradient(135deg,_#0f172a,_#1e1b4b_55%,_#020617)] pb-20 pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
            <li>
              <Link
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href={`/modulos/${modulo.slug}/`}
              >
                {modulo.titulo}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              aria-current="page"
              className="max-w-[16rem] truncate font-medium text-slate-200 sm:max-w-md"
            >
              {aula.titulo}
            </li>
          </ol>
        </nav>

        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-xl text-xl"
                style={{ backgroundColor: `${modulo.cor}33` }}
              >
                {modulo.icone}
              </span>
              <span>{modulo.titulo}</span>
              <span aria-hidden="true" className="text-slate-600">
                •
              </span>
              <span>
                Aula {lessonIndex + 1} de {modulo.aulas.length}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              {aula.titulo}
            </h1>
          </header>

          <article className="rounded-3xl border border-white/10 bg-slate-950/35 p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
            <MarkdownContent content={aula.conteudo} />
          </article>

          <aside
            className="mt-6 rounded-2xl border border-amber-300/25 bg-gradient-to-r from-amber-400/15 to-orange-400/10 p-6"
            aria-labelledby="dica-enem"
          >
            <div className="flex gap-4">
              <span aria-hidden="true" className="text-3xl">
                💡
              </span>
              <div>
                <h2 className="text-lg font-bold text-amber-100" id="dica-enem">
                  Dica do ENEM
                </h2>
                <p className="mt-2 leading-7 text-amber-50/85">
                  {aula.dicaEnem}
                </p>
              </div>
            </div>
          </aside>

          {narrativa && (
            <section
              className="mt-6 rounded-2xl border border-violet-300/20 bg-violet-400/10 p-6"
              aria-labelledby="narrativa-title"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-200">
                Leitura complementar
              </p>
              <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2
                    className="text-xl font-bold text-white"
                    id="narrativa-title"
                  >
                    {narrativa.titulo}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-violet-100/75">
                    {narrativa.descricao}
                  </p>
                  <p className="mt-3 text-sm font-medium text-violet-200">
                    {narrativa.tempoLeitura}
                    {narrativa.audio ? " · inclui narração" : ""}
                  </p>
                </div>
                <Link
                  className="shrink-0 rounded-xl border border-violet-200/30 bg-violet-200/10 px-4 py-2.5 text-center text-sm font-bold text-violet-100 transition hover:bg-violet-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200"
                  href={`/modulos/${modulo.slug}/${aula.slug}/conto/`}
                >
                  Ler narrativa →
                </Link>
              </div>
            </section>
          )}

          {aula.questoes.length > 0 && (
            <section
              className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
              aria-labelledby="questoes-comentadas"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                Pratique
              </p>
              <h2
                className="mt-2 text-2xl font-bold text-white"
                id="questoes-comentadas"
              >
                {aula.questoes.length === 1
                  ? "Questão comentada"
                  : "Questões comentadas"}
              </h2>
              <div className="mt-6 space-y-8">
                {aula.questoes.map((questao) => (
                  <QuestaoComponent key={questao.enunciado} questao={questao} />
                ))}
              </div>
            </section>
          )}

          {aula.exercicios.length > 0 && (
            <section
              className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
              aria-labelledby="exercicios-fixacao"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                Consolide
              </p>
              <h2
                className="mt-2 text-2xl font-bold text-white"
                id="exercicios-fixacao"
              >
                Exercícios de fixação
              </h2>
              <div className="mt-6 space-y-7">
                {aula.exercicios.map((exercicio, index) => (
                  <ExercicioComponent
                    exercicio={exercicio}
                    index={index}
                    key={exercicio.enunciado}
                  />
                ))}
              </div>
            </section>
          )}

          <div className="mt-6">
            <LessonCompletion lessonId={aula.id} />
          </div>

          <nav
            aria-label="Navegação entre aulas"
            className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2"
          >
            {previousLesson ? (
              <Link
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href={`/modulos/${modulo.slug}/${previousLesson.slug}/`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  ← Aula anterior
                </span>
                <span className="mt-2 block font-semibold text-white transition group-hover:text-amber-200">
                  {previousLesson.titulo}
                </span>
              </Link>
            ) : (
              <Link
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href={`/modulos/${modulo.slug}/`}
              >
                ← Voltar ao módulo
              </Link>
            )}
            {nextLesson ? (
              <Link
                className="group rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 p-4 text-right text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100"
                href={`/modulos/${modulo.slug}/${nextLesson.slug}/`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                  Próxima aula →
                </span>
                <span className="mt-2 block font-bold transition group-hover:translate-x-0.5">
                  {nextLesson.titulo}
                </span>
              </Link>
            ) : (
              <Link
                className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 p-4 text-right text-sm font-bold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100"
                href="/modulos/"
              >
                Concluir módulo →
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
