import {readFileSync} from 'node:fs';
console.log(readFileSync('data.json', {encoding:'utf8'}));
