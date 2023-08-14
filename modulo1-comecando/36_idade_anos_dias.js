import { question } from "readline-sync";

const anos = Number(question("Selecione a idade em anos: "))

const meses =Number(question("Meses: "))

const dias = Number(question("Dias: "))


const idade_dias = ((anos * 365) + (meses * 30) + dias)
/* 
   Adotando:
   1 ano = 365 dias (aprox)
   1 ano = 12 meses
   1 mes = 30 dias
*/

console.log(` A idade de ${anos} anos, ${meses} meses e ${dias} dias 
 é igual a ${idade_dias} dias`)