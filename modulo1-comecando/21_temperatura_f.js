import { question } from "readline-sync";

const temperatura_fahrenheint = Number(question(" Temperatura em Fahrenheint: "))

const temperatura_celsius =  ((5 * temperatura_fahrenheint - 160) / 9)

console.log(` A conversão da temperatura em Fahrenheint ${temperatura_fahrenheint} F
 é igual ${temperatura_celsius} C° `)