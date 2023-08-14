import { question } from "readline-sync";

const valor_veiculo_fabrica = Number(question("Informe o valor de fábrica do veículo: R$ "))

const percentagem_distribuidor = valor_veiculo_fabrica * 0.28
const percentagem_imposto = valor_veiculo_fabrica * 0.45

const custo_consumidor = valor_veiculo_fabrica + (percentagem_distribuidor + percentagem_imposto)

console.log(` O custo final do veículo ao consumidor será de R$ ${custo_consumidor}`)