import { question } from "readline-sync";

const nota1 = Number(question(" Nota 1 : "))

const nota2 = Number(question(" Nota 2 : "))

const nota3 = Number(question(" Nota 3 : "))


const media = (nota1 + nota2 + nota3) / 3

console.log(` A média dos numeros ${nota1}, ${nota2} e ${nota3} é
 é igual a ${media}`)