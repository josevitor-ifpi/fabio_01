import { question } from "readline-sync";

const numerador1 = Number(question("numerador 1: "))
const denominador1 = Number(question("denominador 1: "))
const numerador2 = Number(question("numerador 2: "))
const denominador2 = Number(question("denominador 2: "))

const demonstracao_soma_fracao = ` ${(numerador1 + numerador2)} / ${(denominador1 * denominador2)}`
const soma_fracao = ((numerador1 + numerador2) / (denominador1 * denominador2))
// falta transformar em fracão irredutível

console.log(` A soma da fração 1 com a fração 2 = ${demonstracao_soma_fracao} é igual ${soma_fracao}`)