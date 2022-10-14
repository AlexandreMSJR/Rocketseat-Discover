// Estrutural
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10/100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

// POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimadoOop = job.calcularEstimativa()
console.log(custoEstimadoOop)