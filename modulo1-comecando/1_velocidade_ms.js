/*1. Leia uma velocidade em m/s, calcule e escreva 
esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)*/

import {question} from "readline-sync"

//Entrada
const velocidade_ms = Number(question("Digite uma velocidade em m/s: "))

//Processamento
const velocidade_km_h = (velocidade_ms * 3.6)

//Saída
console.log(`A velocidade em m/s ${velocidade_ms} convertida para Km/h é igual ${velocidade_km_h} Km/h`)