import { question } from "readline-sync";

const numero = Number(question("Digite um numero (3 digitos): "))

const centena = Math.floor(numero / 100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = numero % 10

const soma = centena + dezena + unidade

console.log(`A soma do numero ${numero} é igual a ${soma}.`)