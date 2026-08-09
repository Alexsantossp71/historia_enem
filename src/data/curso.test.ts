import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  aulas,
  getAulaBySlug,
  getModuloBySlug,
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


describe("catalogo do curso - getModuloBySlug", () => {
  it("retorna modulo existente pelo slug", () => {
    const modulo = getModuloBySlug("historia-brasil");
    expect(modulo).toBeDefined();
    expect(modulo!.slug).toBe("historia-brasil");
    expect(modulo!.aulas.length).toBeGreaterThan(0);
  });

  it("retorna undefined para slug inexistente", () => {
    expect(getModuloBySlug("modulo-inexistente")).toBeUndefined();
  });
});

describe("catalogo do curso - getAulaBySlug", () => {
  it("retorna aula existente", () => {
    const aula = getAulaBySlug("historia-brasil", "povos-indigenas");
    expect(aula).toBeDefined();
    expect(aula!.id).toBe("1-1");
  });

  it("retorna undefined para modulo inexistente", () => {
    expect(getAulaBySlug("modulo-inexistente", "povos-indigenas")).toBeUndefined();
  });
});

describe("catalogo do curso - getNarrativaBySlug", () => {
  it("retorna narrativa existente", () => {
    const narrativa = getNarrativaBySlug("povos-indigenas");
    expect(narrativa).toBeDefined();
  });

  it("retorna undefined para slug inexistente", () => {
    expect(getNarrativaBySlug("narrativa-inexistente")).toBeUndefined();
  });
});

describe("catalogo do curso - estrutura adicional", () => {
  it("cada aula tem pelo menos 1 questao comentada", () => {
    for (const aula of aulas) {
      expect(aula.questoes.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("cada questao tem alternativas unicas", () => {
    for (const aula of aulas) {
      for (const questao of aula.questoes) {
        expect(new Set(questao.alternativas).size).toBe(5);
      }
    }
  });

  it("tem exatamente 4 modulos", () => {
    expect(modulos).toHaveLength(4);
  });

  it("cada modulo tem pelo menos 1 aula", () => {
    for (const modulo of modulos) {
      expect(modulo.aulas.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("total de atividades e positivo", () => {
    expect(getTotalAtividades()).toBeGreaterThan(0);
  });
});
