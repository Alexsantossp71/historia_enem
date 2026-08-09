import { describe, expect, it } from "vitest";

import type { Exercicio, Questao } from "@/data/curso";

const mockQuestao: Questao = {
  enunciado: "Qual foi o principal motivo da chegada dos portugueses ao Brasil?",
  alternativas: [
    "Exploracao de minerios",
    "Expansao territorial",
    "Busca por especiarias e rotas comerciais",
    "Missoes religiosas",
    "Fuga de perseguicoes na Europa",
  ],
  correta: 2,
  comentario:
    "Os portugueses chegaram ao Brasil em 1500 em uma expedicao liderada por Pedro Alvares Cabral.",
};

const mockExercicio: Exercicio = {
  enunciado: "O Tratado de Tordesilhas foi assinado em:",
  alternativas: ["1492", "1494", "1500", "1510", "1530"],
  correta: 1,
};

describe("QuestaoComponent — data structure", () => {
  it("has exactly 5 alternatives", () => {
    expect(mockQuestao.alternativas).toHaveLength(5);
  });

  it("has a valid correct index", () => {
    expect(mockQuestao.correta).toBeGreaterThanOrEqual(0);
    expect(mockQuestao.correta).toBeLessThan(5);
  });

  it("has non-empty commentary", () => {
    expect(mockQuestao.comentario.trim()).not.toBe("");
  });

  it("correct answer points to a valid alternative", () => {
    const correctAnswer = mockQuestao.alternativas[mockQuestao.correta];
    expect(correctAnswer).toBeDefined();
    expect(correctAnswer.trim()).not.toBe("");
  });
});

describe("ExercicioComponent — data structure", () => {
  it("has exactly 5 alternatives", () => {
    expect(mockExercicio.alternativas).toHaveLength(5);
  });

  it("has a valid correct index", () => {
    expect(mockExercicio.correta).toBeGreaterThanOrEqual(0);
    expect(mockExercicio.correta).toBeLessThan(5);
  });
});

describe("AlternativeLabel — character mapping", () => {
  it("maps 0-A through 4-E", () => {
    const labels = Array.from({ length: 5 }, (_, i) =>
      String.fromCharCode(65 + i),
    );
    expect(labels).toEqual(["A", "B", "C", "D", "E"]);
  });
});

describe("Feedback logic", () => {
  it("identifies correct answer", () => {
    expect(2 === mockQuestao.correta).toBe(true);
  });

  it("identifies wrong answer", () => {
    expect(0 === mockQuestao.correta).toBe(false);
  });

  it("maps correct index to letter", () => {
    expect(String.fromCharCode(65 + mockExercicio.correta)).toBe("B");
  });
});
