// const prompt = require('prompt-sync')();
 
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

// let i = 0;
const choices = ["タスク追加", "タスク削除", "タスク一覧", "プログラム終了"];


// choices.forEach((choice) => {
//     i++
//         console.log(i+":"+choice);
//     });


    for(i=0;i<choices.length;i++){
        console.log((i+1)+":"+choices[i])
    }