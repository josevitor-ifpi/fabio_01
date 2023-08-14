import { question } from "readline-sync";

const lado = Number(question(" Lado: "))

const area_quadrado = (lado ** 2)

console.log(`A área do quadrado é ${area_quadrado}`)