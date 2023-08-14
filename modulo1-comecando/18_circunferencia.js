import { question } from "readline-sync";

const raio = Number(question(" Raio: "))

const comprimento_circunferencia = (2 * 3.14 * raio)

console.log(` O comprimento da circunferência é ${comprimento_circunferencia}`)