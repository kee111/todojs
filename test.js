// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question("What is your name? ", (answer) => {
//     console.log(`Hello, ${answer}!`);
//     readline.close();
// });



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


(async function main() {
    const name = await readUserInput("What is your name? ");
    console.log(`Hello, ${name}!`);
})();