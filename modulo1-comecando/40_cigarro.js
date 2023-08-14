import { question } from "readline-sync";

const preço_carteira = Number(question("Digite o preço de uma carteira de cigarro: R$"))
const  cigarros_fumados_por_dia = Number(question("N° de cigarros fumados por dia: "))
const numero_de_anos_fumante = Number(question("N° de anos como fumante: "))

const preco_cigarro = (preço_carteira / 20)

const despesa = (cigarros_fumados_por_dia * preco_cigarro * 365) * numero_de_anos_fumante

console.log(` O valor total gasto por um fumante em ${numero_de_anos_fumante} anos
 é igual R$ ${despesa}`)