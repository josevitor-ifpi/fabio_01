/*4. Leia o valor do dólar e um valor em dólar,
 calcule e escreva o equivalente em real (R$). 
*/

import { question } from "readline-sync";

//Entrada
const cotacao_dolar = Number(question("Digite a cotação do Dólar: R$"))
const quantia_em_dolar = Number(question("Digite uma quantia em dólares: $"))

//Processamento
const conversao_dolar_real = (cotacao_dolar * quantia_em_dolar)

//Saída
console.log(`A conversão de $${quantia_em_dolar} equivale R$${conversao_dolar_real}`)
