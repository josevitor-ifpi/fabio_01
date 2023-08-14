import { question } from "readline-sync";

const base = Number(question(" Base: "))
const altura = Number(question(" Altura : "))

const area_retangulo = (base *  altura)

console.log(`A área do retângulo é ${area_retangulo}`)