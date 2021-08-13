let name;

while (name!=4) {
    console.log("----todoリスト----\n何したいですか？");
    console.log("1:タスク追加");
    console.log("2:タスク削除");
    console.log("3:タスク一覧");
    console.log("4:プログラム終了");


(async function main() {
    const name = await readUserInput("What is your name? ");
    console.log(`Hello, ${name}!`);
})();



}
function readUserInput(question) {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve, reject) => {
        readline.question(question, (answer) => {
            resolve(answer);
            readline.close();
        });
    });
}







