

describe("catalogo do curso — getModuloBySlug", () => {
  it("retorna modulo existente pelo slug", () => {
    const modulo = getModuloBySlug("historia-brasil");
    expect(modulo).toBeDefined();
    expect(modulo!.titulo).toBe("Historia do Brasil");
    expect(modulo!.aulas.length).toBeGreaterThan(0);
  });

  it("retorna undefined para slug inexistente", () => {
    expect(getModuloBySlug("modulo-inexistente")).toBeUndefined();
  });
});

describe("catalogo do curso — getAulaBySlug", () => {
  it("retorna aula existente", () => {
    const aula = getAulaBySlug("historia-brasil", "povos-indigenas");
    expect(aula).toBeDefined();
    expect(aula!.id).toBe("1-1");
  });

  it("retorna undefined para modulo inexistente", () => {
    expect(getAulaBySlug("modulo-inexistente", "povos-indigenas")).toBeUndefined();
  });
});

describe("catalogo do curso — getNarrativaBySlug", () => {
  it("retorna narrativa existente", () => {
    const narrativa = getNarrativaBySlug("povos-indigenas");
    expect(narrativa).toBeDefined();
    expect(narrativa!.titulo).toBe("A Ultima Noite de Arariboia");
  });

  it("retorna undefined para slug inexistente", () => {
    expect(getNarrativaBySlug("narrativa-inexistente")).toBeUndefined();
  });
});

describe("catalogo do curso — estrutura adicional", () => {
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
