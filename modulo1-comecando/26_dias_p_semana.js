import { question } from "readline-sync";

const dias = Number(question(" Informe a quantidade de dias: "))

const semana = Math.floor(dias / 7)
const resto_dias = dias % 7

console.log(` A conversão de ${dias} dias para semanas e dias é igual ${semana} semana(s)
 e ${resto_dias} dias`)