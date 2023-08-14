import { question } from "readline-sync";

const numero = Number(question(" Numero de 4 digitos: "))

const milhar = Math.floor(numero / 1000)
const centena = Math.floor((numero % 1000) / 100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = numero % 10

const soma = milhar + centena + dezena + unidade

console.log(` A soma ${milhar} + ${centena} + ${dezena} + ${unidade} é igual a ${soma} `)