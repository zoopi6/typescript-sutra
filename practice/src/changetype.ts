import { createInterface } from 'readline';

const rl = createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question('Input Number!!', (line) => {
    // console.log(`${line} is entered` );
    console.log(`${line} is entered` );
    console.log(line+1000); // 暗黙の変換（入力されたものは文字列として認識）
    //数値に変換
    console.log(Number(line) + 1000 );
    rl.close();
});