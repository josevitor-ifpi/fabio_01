import { question } from "readline-sync";

const num1 = Number(question(" Número : "))
const num2 = Number(question(" Número : "))
const num3 = Number(question(" Número : "))

const soma = (num1 + num2)

const subtraçao = (num2 - num3)

console.log(` A soma dos 2 primeiros é ${soma} e a diferença entre os 2 últimos é ${subtraçao}`)