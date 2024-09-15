const { alfabeto } = require('./base')

// [] -> conjuntos
// [^ ] -> Negação do conjunto
// [ - ] -> Range

console.log(alfabeto)
//console.log(alfabeto.match(/[^abc123]+/gi))
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) // unicode
console.log(alfabeto.match(/\w+/g)) // todos alfanumérico e _ 
console.log(alfabeto.match(/\W+/g)) // nenhum alfanumérico e _ 
console.log(alfabeto.match(/\d+/g)) // todos os dígitos 
console.log(alfabeto.match(/\D+/g)) // nenhum os dígitos 
console.log(alfabeto.match(/\s+/g)) // espaços, tabulações, nova linha, recuos, ... 
console.log(alfabeto.match(/\S+/g)) // nenhum espaços, tabulações, nova linha, recuos, ... 
