import { question } from "readline-sync"

const x1 = Number(question(" Número : "))
const y1 = Number(question(" Número : "))

const x2 = Number(question(" Número : "))
const y2 = Number(question(" Número : "))

const distancia_pontos = (((x2 - x1) ** 2) + (((y2 - y1)) ** 2)) ** 0.5

console.log(` A distância dos pontos é ${distancia_pontos}`)