import { question } from "readline-sync";

const raio = Number(question(" Raio: "))

const volume_esfera = (4 * 3.14 * (raio ** 3)) / 3

console.log(` O volume da esfera é ${volume_esfera}`)