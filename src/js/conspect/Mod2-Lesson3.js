{const clients = ["Mango", "Poly", "Ajax", "Daria", "Robin", "Frank"];

// // Указывая в скобках индекс элемента мы получаем его значение
console.log(clients[0]);
console.log(clients[1]);
console.log(clients[2]);
clients[0] = "Friend";
clients[1] = "Maksim";

console.log(clients);
console.log(clients.length);

const lastElementIndex = clients.length - 1;
console.log(lastElementIndex);
console.log(clients[lastElementIndex]);

for (let i = 0; i < clients.length; i += 1) {
    console.log(clients[i]);
}

for (const client of clients) {
    console.log(client);
}

const clientNameToFind = "Frank";
let message = "Клиент с таким иенем отсутствует в базе данных!";

for (const client of clients) {
    if (client === clientNameToFind) {
        message = "Клиент с таким именем есть в базе данных!";
        break;
    }
    
}
console.log(message);
}


{
const numbers = [1, 5, 16, 28, 30, 38, 10, 3];
const threshold = 15;
// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
}
}


{
let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// // Изменим значение a
a = 10;
console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
    console.log(b); // 5
}

{const name = "Mango";
console.log(name.split(""));

const message = "JavaScript это интересно";
console.log(message.split(" "));
}

{
const words = ["JavaScript", "это", "интересно"];
console.log(words.join(""));
console.log(words.join(" "));
console.log(words.join("-"));
}

{
const clients = ["Mango", "Poly", "Ajax", "Daria", "Robin", "Frank"];
console.log(clients.indexOf("Robin"));
console.log(clients.indexOf("Monkong"));

console.log(clients.includes("Frank"));
console.log(clients.includes("Pol"));
}

{
    const fruit = "apple";

    if (fruit === "apple" || fruit === "strawberry") {
        console.log("It is a red fruit!");
    }

    if (fruit === "apple" ||
        fruit === "strawberry" ||
        fruit === "cherry" ||
        fruit === "cranberries") {
        console.log("It is a red fruit!");
    }
}

{
    const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
    const fruit = "cherry";
    
    const hasFruit = redFruits.includes(fruit);

    if (hasFruit) {
        console.log(`${fruit} is a red fruit!`);
    } else {
        console.log(`${fruit} is not a red fruit`);
}
}

{
    const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(0, 2)); // ["Poly", "Kiwi"]

}

{
    const scores = [1, 2, 3, 4, 5, 6];
    const deletedScores = scores.splice(0, 3);
    console.log(scores);

    console.log(deletedScores);
}


{
    const colors = ["red", "green", "blue"];

    colors.splice(2, 0, "purple");
    colors.splice(1, 0, "white", "black");
    console.log(colors);
}


{
    const languages = ['C', "C++", "Java", "JavaScript"];

    languages.splice(1, 2, "Python");
    console.log(languages);
}

{
    const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
    const newClients = ["Monkong", "Singu"];

    const allClientsWithOldFirst = oldClients.concat(newClients);
    console.log(allClientsWithOldFirst);

    const allClientsWithNewFirst = newClients.concat(oldClients);
    console.table(allClientsWithNewFirst);

    console.table(oldClients);
    console.table(newClients);
}










