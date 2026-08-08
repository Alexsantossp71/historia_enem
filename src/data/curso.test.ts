import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  aulas,
  getAulaBySlug,
  getNarrativaBySlug,
  getTotalAtividades,
  getTotalAulas,
  modulos,
  narrativas,
} from "./curso";

describe("catálogo do curso", () => {
  it("mantém módulos, aulas e slugs únicos", () => {
    expect(new Set(modulos.map((modulo) => modulo.id)).size).toBe(
      modulos.length,
    );
    expect(new Set(modulos.map((modulo) => modulo.slug)).size).toBe(
      modulos.length,
    );
    expect(new Set(aulas.map((aula) => aula.id)).size).toBe(aulas.length);
    expect(new Set(aulas.map((aula) => aula.slug)).size).toBe(aulas.length);
    expect(getTotalAulas()).toBe(aulas.length);
  });

  it("expõe todas as aulas pelo respectivo módulo", () => {
    for (const modulo of modulos) {
      for (const aula of modulo.aulas) {
        expect(getAulaBySlug(modulo.slug, aula.slug)).toEqual(aula);
      }
    }
  });

  it("mantém alternativas e respostas válidas", () => {
    for (const aula of aulas) {
      expect(aula.conteudo.trim()).not.toBe("");
      expect(aula.dicaEnem.trim()).not.toBe("");

      for (const questao of aula.questoes) {
        expect(questao.alternativas).toHaveLength(5);
        expect(questao.correta).toBeGreaterThanOrEqual(0);
        expect(questao.correta).toBeLessThan(questao.alternativas.length);
        expect(questao.comentario.trim()).not.toBe("");
      }

      for (const exercicio of aula.exercicios) {
        expect(exercicio.alternativas).toHaveLength(5);
        expect(exercicio.correta).toBeGreaterThanOrEqual(0);
        expect(exercicio.correta).toBeLessThan(exercicio.alternativas.length);
      }
    }

    const expectedActivities = aulas.reduce(
      (total, aula) => total + aula.questoes.length + aula.exercicios.length,
      0,
    );
    expect(getTotalAtividades()).toBe(expectedActivities);
  });

  it("mantém uma narrativa Markdown para cada aula", () => {
    expect(Object.keys(narrativas)).toHaveLength(aulas.length);

    for (const aula of aulas) {
      const narrativa = getNarrativaBySlug(aula.slug);
      expect(narrativa).toBeDefined();
      expect(
        existsSync(
          join(process.cwd(), "src", "content", "contos", `${aula.slug}.md`),
        ),
      ).toBe(true);
    }
  });
});
