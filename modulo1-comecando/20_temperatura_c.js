import { question } from "readline-sync";

const temperatura_celsius = Number(question(" Temperatura em celsius: "))

const temperatura_fahrenheint = ((9 * temperatura_celsius + 160) / 5)

console.log(` A conversão da temperatura em Celsius ${temperatura_celsius} C°
 é igual ${temperatura_fahrenheint} F`)