
{
    // 1. Объявление функции multiply
    function multiply() {
        // Тело функции
        console.log("Это лог при вызове функции multiply");
    }

    // 2. Вызовы функции multiply
    multiply(); // "Это лог при вызове функции multiply"
    multiply(); // "Это лог при вызове функции multiply"
    multiply(); // "Это лог при вызове функции multiply"
}

{
// Объявление параметров x, y, z
    function multiply(x, y, z) {
        console.log(`Результат умножения равен ${x * y * z}`);
    }
// Передача аргументов
    multiply(2, 3, 5); // Результат умножения равен 30
    multiply(48, 36, 50); // Результат умножения равен 86400
    multiply(359, 498, 255); // Результат умножения равен 45509410
}

{
    function multiply(x, y, z) {
        console.log("Код до return выполняется как обычно");
        // Возвращаем результат выражения умножения
        return x * y * z;

        console.log("Этот лог никогда не выполнится, он стоит после return");
    }
    // Результат работы функции можно сохранить в перменнню
    let result = multiply(2, 3, 5);
    console.log(result);
    
    result = multiply(20, 35, 523);
    console.log(result);

    result = multiply(212, 312, 545);
    console.log(result);

}

{
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

string = array.join(delimeter);

  // Change code above this line
  return string;
    }
   console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
   console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
   console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
}

{function findLongestWord(string) {
  // Change code below this line
    let words;
    words = string.split(" ");
    

    console.log(words);

  // Change code above this line
}
    console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

}