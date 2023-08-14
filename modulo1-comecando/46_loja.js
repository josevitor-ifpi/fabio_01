import { question } from "readline-sync";

const nome_produto = question("Nome do produto: ")
const valor_produto = Number(question(`Qual o valor do(a) ${nome_produto}: R$ `))

const entrada = Math.floor((valor_produto / 3) + valor_produto % 3)
const prestacoes = Math.floor((valor_produto - entrada) / 2)

console.log(` Dado o valor do(a) ${nome_produto} igual a R$ ${valor_produto}
 a entrada será de R$ ${entrada} e as duas prestações serão de R$ ${prestacoes}`)