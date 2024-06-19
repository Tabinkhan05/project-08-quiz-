import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: "Q1. who was the founder of Pakistan :",
        choices: ["allama iqbal", "quid-e-azam", "liaquat ali khan", "khwaja nizamuddin"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. who was the first prime minister of Pakistan :",
        choices: ["allama iqbal", "quid-e-azam", "liaquat ali khan", "khwaja nizamuddin"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. who wrote the national anthem of Pakistan :",
        choices: ["allama iqbal", "choudary rehmat ali", "liaquat ali khan", "hafeez jhalandri"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. when did east pakistan got indepandent :",
        choices: ["1972", "1969", "1970", "1971"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. who was the last viceroy:",
        choices: ["sir sayyed", "lord mountbatten", "lord curzon", "none of above"],
    }]);
let score = 0;
switch (quiz.question_1) {
    case "quid-e-azam":
        console.log("1. correct!");
        ++score;
        break;
    default:
        console.log("1.incorrect!");
}
switch (quiz.question_2) {
    case "liaquat ali khan":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2.incorrect!");
}
switch (quiz.question_3) {
    case "hafeez jhalandri":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3.incorrect!");
}
switch (quiz.question_4) {
    case "1971":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4.incorrect!");
}
switch (quiz.question_5) {
    case "lord curzon":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5.incorrect!");
}
console.log(` you scored :${score}`);
