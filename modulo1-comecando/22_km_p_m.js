import { question } from "readline-sync";

const km = Number(question(" Informe uma valor em km: "))

const metro = (km * 1000)

console.log(` A conversão de ${km} Km para Metro é igual ${metro} m`)