import { question } from "readline-sync";

const m = Number(question(" Informe uma valor em km: "))

const km = (m / 1000)

console.log(` A conversão de ${m} m para Km é igual ${km} Km`)