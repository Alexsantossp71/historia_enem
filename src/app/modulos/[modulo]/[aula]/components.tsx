"use client";

import { useId, useState } from "react";

import type { Exercicio, Questao } from "@/data/curso";

function AlternativeLabel({ index }: { index: number }) {
  return (
    <span aria-hidden="true" className="mr-3 font-semibold text-slate-300">
      {String.fromCharCode(65 + index)}.
    </span>
  );
}

export function QuestaoComponent({ questao }: { questao: Questao }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const feedbackId = useId();
  const answered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === questao.correta;

  function reset() {
    setSelectedAnswer(null);
  }

  return (
    <fieldset className="space-y-4">
      <legend className="text-base leading-7 text-white sm:text-lg">
        {questao.enunciado}
      </legend>

      <div className="space-y-3">
        {questao.alternativas.map((alternativa, index) => {
          const selected = selectedAnswer === index;
          const correct = index === questao.correta;
          const stateClass = !answered
            ? "border-white/10 bg-white/5 hover:border-amber-300/50 hover:bg-white/10"
            : correct
              ? "border-emerald-400/70 bg-emerald-400/15"
              : selected
                ? "border-rose-400/70 bg-rose-400/15"
                : "border-white/10 bg-white/3 opacity-70";

          return (
            <button
              aria-describedby={answered ? feedbackId : undefined}
              aria-pressed={selected}
              className={`flex w-full items-start rounded-xl border p-4 text-left text-sm leading-6 text-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:cursor-default sm:text-base ${stateClass}`}
              disabled={answered}
              key={alternativa}
              onClick={() => setSelectedAnswer(index)}
              type="button"
            >
              <AlternativeLabel index={index} />
              <span>{alternativa}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          aria-live="polite"
          className={`rounded-xl border p-4 ${
            isCorrect
              ? "border-emerald-400/30 bg-emerald-400/10"
              : "border-rose-400/30 bg-rose-400/10"
          }`}
          id={feedbackId}
        >
          <p className="font-semibold text-white">
            {isCorrect ? "✓ Resposta correta" : "Revise este conceito"}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-200">
            {questao.comentario}
          </p>
          {!isCorrect && (
            <button
              className="mt-3 text-sm font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-4 hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              onClick={reset}
              type="button"
            >
              Tentar novamente
            </button>
          )}
        </div>
      )}
    </fieldset>
  );
}

export function ExercicioComponent({
  exercicio,
  index,
}: {
  exercicio: Exercicio;
  index: number;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const feedbackId = useId();
  const answered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === exercicio.correta;

  function reset() {
    setSelectedAnswer(null);
  }

  return (
    <fieldset className="space-y-4 border-b border-white/10 pb-7 last:border-b-0 last:pb-0">
      <legend className="text-base leading-7 text-white">
        <span className="mr-2 font-bold text-amber-300">{index + 1}.</span>
        {exercicio.enunciado}
      </legend>

      <div className="space-y-2">
        {exercicio.alternativas.map((alternativa, alternativeIndex) => {
          const selected = selectedAnswer === alternativeIndex;
          const correct = alternativeIndex === exercicio.correta;
          const stateClass = !answered
            ? "border-white/10 bg-white/5 hover:border-amber-300/50 hover:bg-white/10"
            : correct
              ? "border-emerald-400/70 bg-emerald-400/15"
              : selected
                ? "border-rose-400/70 bg-rose-400/15"
                : "border-white/10 bg-white/3 opacity-70";

          return (
            <button
              aria-describedby={answered ? feedbackId : undefined}
              aria-pressed={selected}
              className={`flex w-full items-start rounded-xl border p-3 text-left text-sm leading-6 text-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:cursor-default ${stateClass}`}
              disabled={answered}
              key={alternativa}
              onClick={() => setSelectedAnswer(alternativeIndex)}
              type="button"
            >
              <AlternativeLabel index={alternativeIndex} />
              <span>{alternativa}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div aria-live="polite" className="text-sm" id={feedbackId}>
          <p
            className={
              isCorrect
                ? "font-semibold text-emerald-300"
                : "font-semibold text-rose-300"
            }
          >
            {isCorrect
              ? "✓ Você acertou!"
              : `A resposta correta é ${String.fromCharCode(65 + exercicio.correta)}.`}
          </p>
          {!isCorrect && (
            <button
              className="mt-2 font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-4 hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              onClick={reset}
              type="button"
            >
              Tentar novamente
            </button>
          )}
        </div>
      )}
    </fieldset>
  );
}
