import { question } from "readline-sync";

const kg = Number(question(" Informe uma valor em km: "))

const g = (kg * 1000)

console.log(` A conversão de ${kg} kg para g é igual ${g} grama(s)`)