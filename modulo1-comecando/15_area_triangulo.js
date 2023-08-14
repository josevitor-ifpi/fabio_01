import { question } from "readline-sync";

const base = Number(question(" Base: "))
const altura = Number(question(" Altura : "))

const area_triangulo = (base *  altura) / 2

console.log(`A área do triângulo é ${area_triangulo}`)