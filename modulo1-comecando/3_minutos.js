/* 3. Leia um valor em minutos,
 calcule e escreva o equivalente em horas e minutos. 
*/

import {question} from "readline-sync"

//Entrada
const minutos = Number(question("Digite um valor em minutos: "))

//Processamento
const valor_em_horas = Math.floor(minutos / 60)
const valor_em_minutos = (minutos % 60)

//Saída
console.log(`O horário ${minutos} minutos equivale a ${valor_em_horas}h${valor_em_minutos}min`)
