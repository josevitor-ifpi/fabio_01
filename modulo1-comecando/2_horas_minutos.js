/* 2. Leia um valor em horas e um valor em minutos,
calcule e escreva o equivalente em minutos.
*/

import {question} from "readline-sync" 

//Entrada
const horas = Number(question("Digite um valor em horas:"))
const minutos = Number(question("Digite um valor em minutos: "))

//Processamento
const valor_em_minutos = (horas * 60 + minutos)

//Saída
console.log(`O horário ${horas}h${minutos}min equivale a ${valor_em_minutos} min.`)