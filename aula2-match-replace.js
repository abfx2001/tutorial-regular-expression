const { texto } = require('./base')

const regExp1 = /Arthur|Maria/gi

// console.log(texto.match(regExp1));
// console.log(texto.replace(/Arthur/gi, 'JooJ'));
// console.log(texto.replace(regExp1, 'JooJ'));
// console.log(texto.replace(/(Arthur|Maria)/gi, '$1 Batista'));
console.log(texto.replace(/(Arthur|Maria)/gi, (input) => {
   return '# ' + input + ' #'
}));
