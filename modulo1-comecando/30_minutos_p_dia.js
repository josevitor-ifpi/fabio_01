import { question } from "readline-sync";

const minutos = Number(question(" Informe a quantidade de minutos: "))

const dias = 

const horas = Math.floor((minutos * 60) * 24)

const resto_minutos = minutos % 60

console.log(` ${dias} ${horas} ${minutos}`)