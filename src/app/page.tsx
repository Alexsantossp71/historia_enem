import Link from "next/link";

import { CourseProgress } from "@/components/course-progress";
import {
  aulas,
  getTotalAtividades,
  getTotalAulas,
  modulos,
} from "@/data/curso";

const studySteps = [
  {
    number: "01",
    title: "Leia com propósito",
    description:
      "Comece por uma aula e destaque relações de causa, consequência e permanência histórica.",
  },
  {
    number: "02",
    title: "Teste o entendimento",
    description:
      "Responda à questão comentada e aos exercícios antes de consultar a resposta.",
  },
  {
    number: "03",
    title: "Conecte ideias",
    description:
      "Use as narrativas para revisar conceitos em contexto e avance no seu ritmo.",
  },
];

export default function Home() {
  const totalAulas = getTotalAulas();
  const totalAtividades = getTotalAtividades();

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.2),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.24),_transparent_35%),linear-gradient(135deg,_#0f172a,_#1e1b4b_55%,_#020617)] pt-16">
      <section className="relative px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
              <span aria-hidden="true">✦</span>
              Curso aberto, gratuito e no seu ritmo
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              História para o ENEM,{" "}
              <span className="text-transparent [background:linear-gradient(90deg,#fde68a,#fb923c)] bg-clip-text">
                com clareza e contexto.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Estude temas fundamentais, pratique com questões comentadas e
              transforme conteúdo em repertório para a prova.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3.5 font-bold text-slate-950 shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                href="/modulos/"
              >
                Começar a estudar{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href="#como-estudar"
              >
                Como funciona
              </a>
            </div>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
            <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 backdrop-blur sm:p-5">
              <p className="text-2xl font-black text-white sm:text-3xl">
                {modulos.length}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                módulos de estudo
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 backdrop-blur sm:p-5">
              <p className="text-2xl font-black text-white sm:text-3xl">
                {totalAulas}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                aulas publicadas
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 backdrop-blur sm:p-5">
              <p className="text-2xl font-black text-white sm:text-3xl">
                {totalAtividades}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                atividades para praticar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/35 px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
              Plano de estudo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              Acompanhe o que já avançou.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Marque uma aula ao terminar. O acompanhamento funciona sem conta e
              fica armazenado somente no seu navegador.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/20">
            <CourseProgress lessonIds={aulas.map((aula) => aula.id)} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                Conteúdo organizado
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Escolha por onde começar.
              </h2>
            </div>
            <Link
              className="font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-4 transition hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              href="/modulos/"
            >
              Ver todos os módulos →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {modulos.map((modulo) => (
              <Link
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-2xl hover:shadow-slate-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                href={`/modulos/${modulo.slug}/`}
                key={modulo.id}
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-14 shrink-0 place-items-center rounded-2xl text-3xl"
                    style={{ backgroundColor: `${modulo.cor}28` }}
                  >
                    {modulo.icone}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-white transition group-hover:text-amber-200">
                      {modulo.titulo}
                    </h3>
                    <p className="mt-2 leading-6 text-slate-300">
                      {modulo.descricao}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="font-medium text-slate-300">
                    {modulo.aulas.length} aulas
                  </span>
                  <span className="font-bold text-amber-300 transition group-hover:translate-x-1">
                    Explorar <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-slate-950/45 px-4 py-16 sm:px-6"
        id="como-estudar"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
            Método simples
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Um ciclo para dar sentido ao conteúdo.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {studySteps.map((step) => (
              <article
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                key={step.number}
              >
                <p className="text-sm font-black tracking-[0.2em] text-amber-300">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
