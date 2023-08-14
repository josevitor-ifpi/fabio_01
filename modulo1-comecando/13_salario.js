import { question } from "readline-sync";

const salario = Number(question(" Digite seu salário: "))

const reducao = (salario * 0.30)

const novo_salario = (salario - reducao)

console.log(` O seu salário era R$ ${salario} e com um redução de 30% igual a R$ ${reducao} seu novo salário passou a ser 70% do valor inicial, 
R$ ${novo_salario}`)