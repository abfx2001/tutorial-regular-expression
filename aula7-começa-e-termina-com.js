const cpfs2 = `234.543.657-54
453.543.786-34
432.523.723-91
978.223.08a.24`

// ^ -> começa com
// $ -> termina com
// [^] -> negação
// m -> Multiline (olha linha por linha)

const cpfRegExp = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm;

console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
