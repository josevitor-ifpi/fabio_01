import { question } from "readline-sync";

const num1 = Number(question(" Número : "))
const num2 = Number(question(" Número : "))

const quociente = Math.floor(num1 / num2)

const resto = (num1 % num2)

console.log(`O quociente de ${num1} por ${num2} é igual a ${quociente} e o resto igual a ${resto}.`)