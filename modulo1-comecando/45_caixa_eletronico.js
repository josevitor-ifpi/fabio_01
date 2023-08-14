import { question } from "readline-sync";

const saque = Number(question("Digite o valor que você quer sacar: R$ "))

const quantidade_notas_50 = Math.floor(saque / 50)
const quantidade_notas_10 = Math.floor((saque % 50) / 10)
const quantidade_notas_5 = Math.floor((saque % 10) / 5)
const quantidade_notas_1 = Math.floor((saque % 5) / 1)

console.log(` O cliente sacou ${quantidade_notas_50} notas de R$ 50,
              ${quantidade_notas_10} notas de R$ 10,
              ${quantidade_notas_5} notas de R$ 5 e
              ${quantidade_notas_1} de R$ 1`)