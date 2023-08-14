import { question } from "readline-sync";

const numero = Number(question(" Numero de 3 digitos: "))

const centena = Math.floor(numero/100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = Math.floor(numero % 10)

const numeros_invertido = (unidade * 100) + (dezena * 10) + centena 

const novo_numero = numero + numeros_invertido

console.log(` A soma do número ${numero} com seu inverso ${numeros_invertido}
 é igual a ${novo_numero}`)