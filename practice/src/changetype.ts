import { createInterface } from 'readline';

const rl = createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question('Input strings!!', (line) => {
    console.log(`${line} is entered` );
    rl.close();
});