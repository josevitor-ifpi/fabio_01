import { question } from "readline-sync";

const horas = Number(question(" Informe a quantidade de horas: "))

const semana = Math.floor(horas / 168)

const dia = Math.floor((horas % 168) / 24)

const resto_horas = horas % 24    

console.log(` ${horas} horas é igual a ${semana} semana, ${dia} dias e ${resto_horas} horas`)

