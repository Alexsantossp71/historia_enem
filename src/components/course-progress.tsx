"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "historia-enem:completed-lessons:v1";
const PROGRESS_EVENT = "historia-enem:progress-updated";

function normalizeLessonIds(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return [
    ...new Set(value.filter((id): id is string => typeof id === "string")),
  ].sort();
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return "[]";
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function subscribe(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(PROGRESS_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(PROGRESS_EVENT, onStoreChange);
  };
}

function writeCompletedLessons(lessonIds: string[]) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(normalizeLessonIds(lessonIds)),
    );
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  } catch {
    // Progress is an optional local convenience. The course stays usable if storage is unavailable.
  }
}

function useCompletedLessons() {
  const serialized = useSyncExternalStore(subscribe, getSnapshot, () => "[]");
  const completedLessonIds = normalizeLessonIds(
    (() => {
      try {
        return JSON.parse(serialized) as unknown;
      } catch {
        return [];
      }
    })(),
  );

  const toggleLesson = useCallback(
    (lessonId: string) => {
      const next = completedLessonIds.includes(lessonId)
        ? completedLessonIds.filter((id) => id !== lessonId)
        : [...completedLessonIds, lessonId];

      writeCompletedLessons(next);
    },
    [completedLessonIds],
  );

  return { completedLessonIds, toggleLesson };
}

interface ProgressMeterProps {
  completed: number;
  total: number;
  label: string;
}

function ProgressMeter({ completed, total, label }: ProgressMeterProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-slate-100">{label}</span>
        <span className="whitespace-nowrap text-slate-300">
          {completed} de {total} · {percentage}%
        </span>
      </div>
      <div
        aria-label={`${label}: ${percentage}% concluído`}
        aria-valuemax={total}
        aria-valuemin={0}
        aria-valuenow={completed}
        className="h-2 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-[width] duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function LessonCompletion({ lessonId }: { lessonId: string }) {
  const { completedLessonIds, toggleLesson } = useCompletedLessons();
  const completed = completedLessonIds.includes(lessonId);

  return (
    <section
      aria-label="Status da aula"
      className="flex flex-col gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="font-semibold text-emerald-100">
          {completed
            ? "Aula concluída — ótimo trabalho!"
            : "Terminou a aula? Registre seu progresso."}
        </p>
        <p className="mt-1 text-sm leading-6 text-emerald-50/75">
          Seu progresso fica salvo apenas neste navegador.
        </p>
      </div>
      <button
        aria-pressed={completed}
        className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
          completed
            ? "bg-emerald-100 text-emerald-950 hover:bg-white"
            : "bg-emerald-400 text-emerald-950 hover:bg-emerald-300"
        }`}
        onClick={() => toggleLesson(lessonId)}
        type="button"
      >
        {completed ? "✓ Concluída" : "Marcar como concluída"}
      </button>
    </section>
  );
}

export function ModuleProgress({ lessonIds }: { lessonIds: string[] }) {
  const { completedLessonIds } = useCompletedLessons();
  const completed = lessonIds.filter((lessonId) =>
    completedLessonIds.includes(lessonId),
  ).length;

  return (
    <ProgressMeter
      completed={completed}
      label="Seu progresso neste módulo"
      total={lessonIds.length}
    />
  );
}

export function CourseProgress({ lessonIds }: { lessonIds: string[] }) {
  const { completedLessonIds } = useCompletedLessons();
  const completed = lessonIds.filter((lessonId) =>
    completedLessonIds.includes(lessonId),
  ).length;

  return (
    <ProgressMeter
      completed={completed}
      label="Seu progresso no curso"
      total={lessonIds.length}
    />
  );
}
