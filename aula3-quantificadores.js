const { texto, arquivos } = require('./base')

//Quantificadores:
// {n, m} -> n: número mínimo de vezes que aparece, m: número máximo
// * -> (opcionais) 0 ou N vezes -> {0, }
// + -> (obrigatório) 1 ou N vezes -> {1, }
// ? -> (opcionais) 0 ou 1 vez -> {0, 1}
// \ -> Caractere de escape

// console.log(texto);
// const regExp1 = /Arthu+r/gi
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi

for (const arquivo of arquivos) {
    console.log(arquivo, arquivo.match(regExp2));
}
