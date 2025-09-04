const { calcularMediaAluno } = require('../src/calcularMediaAluno');

describe ("Teste da media dos alunos", () => {

it("Quando a1 ou a2 não forem informadas", () => {
    expect(() => calcularMediaAluno(undefined, undefined, 1)).toThrow(Error);
    expect(() => calcularMediaAluno(undefined, 5, 1)).toThrow(Error);
    expect(() => calcularMediaAluno(7, undefined, 1)).toThrow(Error);
}) 

it("Quando a1 ou a2 forem negativos", () => {
    expect(() => calcularMediaAluno(-2, -2, 1)).toThrow(Error)
    expect(() => calcularMediaAluno(5, -2, 1)).toThrow(Error)
    expect(() => calcularMediaAluno(-2, 9, 1)).toThrow(Error)
})

it("Quando a3 não for informado", () => {
    expect(calcularMediaAluno(9, 9)).toBeCloseTo(9)
})

it("Quando a3 for negativa", () => {
    expect(() => calcularMediaAluno(5, 2, -4)).toThrow(Error)
})

it("Quando a combinação de A3 for melhor com A1", () => {
    expect(calcularMediaAluno(6, 2, 7)).toBeCloseTo(6.6)
    expect(calcularMediaAluno(7, 1, 6)).toBeCloseTo(6.4)
})

it("Quando a combinação de A3 for melhor com A2", () => {
    expect(calcularMediaAluno(1, 4, 7)).toBeCloseTo(5.8)
    expect(calcularMediaAluno(2, 6, 7)).toBeCloseTo(6.6)
})

})
