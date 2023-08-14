import {question} from "readline-sync"

const velocidade_km_h = Number(question("Digite um valor em Km/h: "))

const velocidade_ms = (velocidade_km_h / 3.6)

console.log(`A velocidade em km/h ${velocidade_km_h} convertida para m/s é igual ${velocidade_ms} m/s`)