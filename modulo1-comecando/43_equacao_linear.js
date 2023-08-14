import { question } from "readline-sync"


const a = Number(question(" a : "))
const b = Number(question(" b : "))

const c = Number(question(" c : "))
const d = Number(question(" d : "))

const e = Number(question(" e : "))
const f = Number(question(" f : "))

const x = ((c * e) - (b * f)) / ((a * e) - (b * d))

const y = ((a * f) - (c * d)) / ((a * e) - (b * d))

const expressao1 = (((a * x) + (b * y)) = c)

const expressao2 = (((d * x) + (e * y)) = f)

console.log(` O valor de x é ${x} e o de y é ${y}`)