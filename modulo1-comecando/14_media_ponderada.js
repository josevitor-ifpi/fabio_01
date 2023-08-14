import { question } from "readline-sync";

const nota1 = Number(question(" Nota 1 : "))
const peso1 = Number(question(" Peso 1 : "))

const nota2 = Number(question(" Nota 2 : "))
const peso2 = Number(question(" Peso 2 : "))

const nota3 = Number(question(" Nota 3 : "))
const peso3 = Number(question(" Peso 3 : "))

const media_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

console.log(` A média ponderada das 3 notas com seus respectivos pesos é igual a ${media_ponderada}`)