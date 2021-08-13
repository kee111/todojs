const prompt = require("prompt-sync")();
const choices = ["タスク追加", "タスク削除", "タスク一覧", "プログラム終了"];
const todoList = [];

while (true) {
    switch (prints()) {
        case "1":
            addTask();
            break;

        case "2":
            deleteTask();
            break;

        case "3":
            viewTask();
            break;

        case "4":
            return;

        default:
            console.log("ちゃんと入力してよ〜ん( ；∀；)");
    }
}

function prints() {
    console.log("----todoリスト----\n何したいですか？\n");
    if (todoList[0] != null) {
        console.log("タスクが「" + todoList.length + "」個残っています");
    }
    for (i = 0; i < choices.length; i++) {
        console.log(i + 1 + ":" + choices[i]);
    }
    return prompt("半角数字で選択してください:");
}

function addTask() {
    todoList.push(prompt("追加するタスクを入力してください:"));
    console.log("タスクが追加されました\n\n\n\n");
}

function deleteTask() {
    viewTask();
    console.log("どのタスクを削除しますか？");
    todoList.splice(parseInt(prompt("半角数字で選択してください:")) - 1, 1);
    console.log("タスクが削除されました\n------------------\n\n\n");
}

function viewTask() {
    let count = 0;
    console.log("\n\n\n------------------");
    console.log("タスク一覧\n");
    todoList.forEach((todo) => {
        count++;
        console.log(count + ":" + todo);
    });
    console.log("\n------------------\n\n");
}
