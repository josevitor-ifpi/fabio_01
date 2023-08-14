import { question } from "readline-sync";

const numero = Number(question(" Numero de 3 digitos: "))

const centena = Math.floor(numero/100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = Math.floor(numero % 10)

const numeros_invertido = (unidade * 100) + (dezena * 10) + centena 

console.log(` O número ${numero} invertido fica ${numeros_invertido} `)