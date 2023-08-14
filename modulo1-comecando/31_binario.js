import { question } from "readline-sync";

const binario = Number(question(" Informe um numero binário: "))
//BINÁRIO DE 4 DÍGITOS

const decimal = parseInt(binario,2).toString(10)

console.log(` ${binario} em binário é igual a ${decimal} em decimal`)
/*
    Para converter o número binário, devemos multiplicar
    os algarismos do número pela base que é 2 elevada a posição respectiva
    do número. Sendo assim, multiplicaremos o número 0 ou 1 por 2 elevado a 0.
    Faça isso sucessivamente até obter vários números que deverão
    ser somados para a conversão completa de binário em decimal.
*/