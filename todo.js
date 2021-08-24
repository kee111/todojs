const prompt = require("prompt-sync")();
const axios = require("axios");
const choices = ["タスク追加", "タスク削除", "タスク一覧", "プログラム終了"];

// todoListを配列初期化する
let todoList = [];

// axiosでデータをとってくる
axios
    .get("https://api.jsonbin.io/b/6118dc5ed5667e403a431f86/latest")
    // 非同期処理
    .then((res) => {
        // responseにサーバーのデータが入るからそれを代入して
        todoList = res.data;
        // todoリストを始める
        run_todo_list();
    });

function run_todo_list() {
    // main処理
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
}

// 表示、入力受け取り用の関数
function prints() {
    console.log("----todoリスト----\n何したいですか？\n");
    if (todoList.length != 0) {
        console.log("タスクが「" + todoList.length + "」個残っています");
    }
    for (i = 0; i < choices.length; i++) {
        console.log(i + 1 + ":" + choices[i]);
    }
    return prompt("半角数字で選択してください:");
}

// タスク追加用の関数
function addTask() {
    todoList.push(prompt("追加するタスクを入力してください:"));
    put_data();

    console.log("タスクが追加されました\n\n\n\n");
}

// タスク削除用の関数
function deleteTask() {
    viewTask();
    console.log("どのタスクを削除しますか？");
    todoList.splice(parseInt(prompt("半角数字で選択してください:")) - 1, 1);

    put_data();

    console.log("タスクが削除されました\n------------------\n\n\n");
}

// タスク確認用の関数
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

// 非同期でtodoListのデータをPUT送信する
function put_data() {
    axios.put("https://api.jsonbin.io/b/6118dc5ed5667e403a431f86", todoList);
}
