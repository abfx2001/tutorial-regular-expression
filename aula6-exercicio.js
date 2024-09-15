const { cpfs, ips } = require('./base')

// ^ -> no começo da exp significa Começa com
// $ -> no começo da exp significa Termina com

console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));

//console.log(ips.match(/[0-255]+\.[0-255]+\.[0-255]\.[0-255]+/g));

const ipRegExp = /((25[0-5]|2[0-4][\d]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][\d]|1\d{2}|\d{2}|\d)/g

// for (let i = 0; i <= 300; i++) {
//     const ip = `${i}.${i}.${i}.${i}`
//     console.log(ip, ip.match(ipRegExp)); 
// }

console.log(ips.match(ipRegExp));
