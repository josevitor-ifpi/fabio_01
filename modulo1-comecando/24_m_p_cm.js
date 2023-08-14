import { question } from "readline-sync";

const m = Number(question(" Informe uma valor em M: "))

const cm = (km * 100)

console.log(` A conversão de ${m} m para cm é igual ${cm} cm`)