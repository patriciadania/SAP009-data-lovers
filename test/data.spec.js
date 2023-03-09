import { buscaNome, buscaTag, calculoAgragado, ordenarCampeoes } from "../src/data.js";

describe("buscaNome", () => {
  it("isto é uma função", () => {
    expect(typeof buscaNome).toBe("function");
  });
  it("função de filtrar campeão por nome existente", () => {
    const campeoes = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ];
    const nome = "an";

    const resultadoEsperado = [{ name: "Morgana" }, { name: "Annie" }];

    expect(buscaNome(campeoes, nome)).toEqual(resultadoEsperado);
  });

  it("função de filtrar campeão por nome não existente", () => {
    const campeoes = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ];
    const nome = "luigi";

    const resultadoEsperado = [];

    expect(buscaNome(campeoes, nome)).toEqual(resultadoEsperado);
  });
});

describe("buscaTag", () => {
  it("isto é uma função", () => {
    expect(typeof buscaTag).toBe("function");
  });
  it("função de filtrar campeão pelo tipo selecionado", () => {
    const campeoes = [
      { tags: ["Assassin", "Fighter"] },
      { tags: ["Tank"] },
      { tags: ["Mage"] },
    ];
    const tag = "Assassin";

    const resultadoEsperado = [{ tags: ["Assassin", "Fighter"] }];
    expect(buscaTag(campeoes, tag)).toEqual(resultadoEsperado);
  });
});

describe("ordenarCampeoes", () => {
  it("isto é uma função", () => {
    expect(typeof ordenarCampeoes).toBe("function");
  });
  it("função de ordenar campeao de maior defesa", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "maior-defesa";

    const resultadoEsperado = [
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de menor defesa", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "menor-defesa";

    const resultadoEsperado = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de maior ataque", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "maior-ataque";

    const resultadoEsperado = [
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de menor ataque", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "menor-ataque";

    const resultadoEsperado = [
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de maior magia", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "maior-magia";

    const resultadoEsperado = [
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de menor magia", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "menor-magia";

    const resultadoEsperado = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de maior dificuldade", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "maior-dificuldade";

    const resultadoEsperado = [
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });
  it("função de ordenar campeao de menor dificuldade", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "menor-dificuldade";

    const resultadoEsperado = [
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });

  it("função de ordenar campeao com ordem indefinida", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];
    const ordem = "indefinida";

    const resultadoEsperado = campeoes;
    expect(ordenarCampeoes(campeoes, ordem)).toStrictEqual(resultadoEsperado);
  });

  it("função de cálculo agragado com 100%", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];

    const campeoesFiltrados = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];

    const resultadoEsperado = 'O tipo selecionado corresponde à 100.00% do total de campeões.';
    expect(calculoAgragado(campeoes, campeoesFiltrados)).toStrictEqual(resultadoEsperado);
  });

  it("função de cálculo agragado com 25%", () => {
    const campeoes = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      },
      {
        nome: "Amumu",
        info: { attack: 2, defense: 8, magic: 8, difficulty: 3 },
      },
      {
        nome: "Lee Sin",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
      {
        nome: "Zed",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
      },
    ];

    const campeoesFiltrados = [
      {
        nome: "Ashe",
        info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
      }
    ];

    const resultadoEsperado = 'O tipo selecionado corresponde à 25.00% do total de campeões.';
    expect(calculoAgragado(campeoes, campeoesFiltrados)).toStrictEqual(resultadoEsperado);
  });
});
