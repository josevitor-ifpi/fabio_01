import { question } from "readline-sync";

const salario = Number(question("Digite seu salário: "))

const aumento = (salario * 0.25)

const novo_salario = (salario + aumento)

console.log(`O seu salário era R$${salario} e com um aumento de 25% igual a R$${aumento} seu novo salário passou a ser R$${novo_salario}`)