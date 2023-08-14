import { question } from "readline-sync";

const meses = Number(question(" Informe a quantidade de meses: "))

const anos = Math.floor(meses / 12)
const resto_meses = meses % 12

console.log(` ${meses} meses é igual a ${anos} anos}`)