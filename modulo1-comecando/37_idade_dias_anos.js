import { question } from "readline-sync";

const dias = Number(question("Selecione a idade em dias: "))


const idade_anos = Math.floor(dias / 365)
const idade_meses = Math.floor((dias / 365) % 12)
const idade_dias = dias % 30

/* 
   Adotando:
   1 ano = 365 dias (aprox)
   1 ano = 12 meses
   1 mes = 30 dias
*/

console.log(` A idade em ${dias} dias é igual a ${idade_anos} anos, ${idade_meses} meses e ${idade_dias} dias`) 