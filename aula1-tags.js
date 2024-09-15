// TAGs:
// Padrão -> Encontra a primeira e para
// g -> Global (encontra todas as ocorrências)
// i -> insensitive (não se aplica a letras maiúsculas e minusculas)
// () -> grupos
// | -> ou

const { texto } = require('./base')

const regExp1 = /(arthur|maria|jose)(, hoje sua esposa)/gi
const found = regExp1.exec(texto)

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
    //console.log(found);
}
