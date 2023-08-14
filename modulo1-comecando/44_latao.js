import { question } from "readline-sync";

const latao = Number(question("Indique a quantidade de latão: "))

const cobre = latao * 0.3

const zinco = latao * 0.7

console.log(` ${latao} Kg de Latão é igual a ${cobre} Kg de Cobre e ${zinco} Kg de Zinco`)