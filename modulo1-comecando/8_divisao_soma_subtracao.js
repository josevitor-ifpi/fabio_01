import { question } from "readline-sync";

const num1 = Number(question(" Número : "))
const num2 = Number(question(" Número : "))

const soma = (num1 + num2)

const subtracao = (num1 - num2)

const divisao = (soma / subtracao)

console.log(`A divisão da soma pela subtração é ${divisao}`)