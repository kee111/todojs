const prompt = require("prompt-sync")();
const choices = ["タスク追加", "タスク削除", "タスク一覧", "プログラム終了"];

while (true) {

    switch(prints()){
        case "1":
            console.log(1);
            break;
        case "2":
            console.log(2);
            break;
        case "3":
            console.log(3);
            break;
        case "4":
            return;
        default :
            console.log("ちゃんと入力してよ〜ん( ；∀；)");
    }
}

function prints(){
    console.log("----todoリスト----\n何したいですか？\n");
    for (i = 0; i < choices.length; i++) {
        console.log(i + 1 + ":" + choices[i]);
    }
    let num = prompt("半角数字で選択してください:");
    return num;

}
