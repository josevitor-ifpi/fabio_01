import { question } from "readline-sync";

const segundos = Number(question(" Informe a quantidade de segundos: "))

const hora = Math.floor(segundos / 3600)
const minuto = Math.floor(segundos / 60) % 60
const resto_segundos = segundos % 60

console.log(`${hora} horas ${minuto} minutos ${resto_segundos} segundos`)