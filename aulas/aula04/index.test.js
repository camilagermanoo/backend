import { soma, subtracao, multiplicacao, divisao } from "./index.js";


//divisao
console.log("Teste da função de DIVISAO()")
if (divisao(4, 2) === 2) console.log("O primeiro teste de divisão PASSOU!")
    else console.log("O primeiro teste de divisão FALHOU!")

if (divisao(6, 6) === 1) console.log("O segundo teste de divisão PASSOU!")
    else console.log("O segundo teste de divisão FALHOU!")

if (divisao(1, 0) === undefined) console.log("O terceiro teste de divisão PASSOU!")
    else console.log("O terceiro teste de divisão FALHOU!")


//multiplicacao
console.log("Teste da função MULTIPLICACAO()")
if (multiplicacao(4, 2) === 8) console.log("O primeiro teste de multiplicacao PASSOU!")
    else console.log("O primeiro teste de multiplicacao FALHOU!")

if (multiplicacao(5, 6) === 30) console.log("O segundo teste de multiplicacao PASSOU!")
    else console.log("O segundo teste de multiplicacao FALHOU!")

if (multiplicacao(9, 1) === 9) console.log("O terceiro teste de multiplicacao PASSOU!")
    else console.log("O terceiro teste de multiplicacao FALHOU!")


//subtracao
console.log("Teste da função SUBTRACAO()")
if (subtracao(4, 2) === 2) console.log("O primeiro teste de subtração PASSOU!")
    else console.log("O primeiro teste de subtração FALHOU!")

if (subtracao(5, 6) === -1) console.log("O segundo teste de subtração PASSOU!")
    else console.log("O segundo teste de subtração FALHOU!")

if (subtracao(9, 1) === 8) console.log("O terceiro teste de subtração PASSOU!")
    else console.log("O terceiro teste de subtração FALHOU!")


//soma
if (soma(2, 2) === 4) console.log("O primeiro teste de soma PASSOU!")
    else console.log("O segundo teste de soma FALHOU!")

if (soma(-1, 2) === 1) console.log("O segundo teste de soma PASSOU!")
    else console.log("O segundo teste de soma FALHOU!")

if (soma(2, 0) === 2) console.log("O terceiro teste de soma PASSOU!")
    else console.log("O segundo teste de soma FALHOU!")

