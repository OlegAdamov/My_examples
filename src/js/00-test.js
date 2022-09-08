
{    console.log(`ЗАДАЧА 1 - сумма зарплат работников`);
    /*
    * Напишите скрипт, который подсчитывает общую сумму зарплат работников.
    * Кол-во работников хранится в переменной employees.
    * Зарплата каждого работника это случайное число от 500 до 5000.
    * Записать сумму в переменную totalSalary и вывестви в консоль.
    */

    // 1. Записать переменные
    const minSalary = 500;
    const maxSalary = 5000;
    const employees = 15;
    let totalSalary = 0;

    // 2. Перебрать работников в цикле
    for (let i = 1; i <= employees; i += 1) {
    
        // 3. Сгенерировать случайную з. п. 
        const salary = Math.round(
            Math.random() * (maxSalary - minSalary) + minSalary);

        // console.log(`ЗП работника номер ${i} - ${salary}`)

        // 4. Суммировать все з.п.
        totalSalary += salary;

    }
    // 5. Лог
    // console.log('totalSalary; ', totalSalary);
}

{    console.log(`ЗАДАЧА 2 - сумма четных чисел`);
    /*
    * Напишите скрипт, который подсчитывает сумму всех чётных чисел,
    * которые входят в диапазон чисел в переменных от min до max.
    * Например, если min=0 и max=5, то в нём два чётных числа - 2 и 4, их сумма 6
    * 
    */



}

{    console.log(`ЗАДАЧА 3 - обработка покупки в магазине`);
    /*
    * Напишите скрипт, обработки покупки в магазине.
    * 
    * - Баланс пользователя хранится в переменной balance
    * - Сумма покупки хранится в переменной payment
    * 
    * - Перед проверкой вывести сообщение:
    * "Общая стоимость заказа (число) кредитов. Проверяем кол-во доступных средсв на счету"
    * 
    * - Если сумма покупки не превышает баланс:
    *   - Вычесть из баланса сумму покупки
    *   - Вывести сообщение "НА счету осталось (число) кредитов"
    * - Если сумма покупки превышает баланс:
    *   - Вывести сообщение "На счету недостаточно средств для проведения операции!"
    * - В конце вы вывесьи сообщение "Операция завершена"
    */



}

{    console.log(`Task 4`);
    /* Напиши скрипт подсчета суммы покупки со скидкой в зависимости 
    *от потраченной суммы за всё время (партнёрская программа).
    * 
    * - Общая сумма потреченного хранится в переменной totalSpent
    * - Сумма текущего платежа хранится в переменной payment
    * - Скидка хранится в переменной discount
    * 
    * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
    * - Если потрачено от [1000 до 5000) - серебряный партнёр, скидка 5%
    * - Если потрачено больше [5000 - золотой партнёр, скидка 10%
    * - Если потрачено меньше 100) - не партнёр, скидка 0%
    * 
    * - В результате вывести сообщение
    * "Оформляем заказ на сумму (сумма) со скидкой (скидка)%"
    */

    // const totalSpent = 2000;
    // let payment = 500;
    // let discount = 0;

    //'Бронзовый партнёр, скидка 2%'
    //'Серебряный партнёр, скидка 5%'
    //'Золотой партнёр, скидка 10%'
    //'У Вас ещё нет партнёрской скидки%'

}

{    console.log(`Task 5`);
    /*
    *Посчитать общую сумму покупок в корзине
   */
    
    const cart = [54, 28, 105, 70, 92, 120, 45, 54, 78, 87];
    let total = 0;

    // for (let i = 0; i < cart.length; i += 1) {
    //     // console.log(cart[i]);
    //     total += cart[i];
    // }

    for (const value of cart) {
        total += value;
    }
    // console.log(`Total: `, total);

}

{    console.log(`Task 6.1`);
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    
    const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    let total = 0;
    // 1. Переменная тотал
    // 2. Перебрать массив
    for (let i = 0; i < numbers.length; i += 1) {
        // console.log(numbers[i]);
    
        
    // 3. На каждой итерации проверить четность элемента
    if (numbers[i] % 2 === 0) {
        // console.log(`Четное `);

    // 4. Если четное - плюсуем к тотал
        total += numbers[i];
   }     
}
    // console.log(`Total: `, total);

}

{    console.log(`Task 6.2`);
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
        const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    let total = 0;

    for (const number of numbers) {
        // console.log(number);

        if (number % 2 === 0) {
            // console.log(`${number} - Четное!!!`);
        
            total += number;
        }
    }
    // console.log(`Total: `, total);
}

{    console.log(`Task 6.3`);
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
        const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    let total = 0;

    for (const number of numbers) {
        // console.log(number);

        if (number % 2 !== 0) {
            // console.log(number, `Эту итерацию пропустить`);
            continue;
        }
        // console.log(`${number} - Четное!!!`);
        total += number;
        
    }
    // console.log(`Total: `, total);
}

{    console.log(`Task 7.1`);

/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через for
*/

    const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    const loginToFind = `poly1scute`;
    let message = `Пользователь ${loginToFind} не найден.`;

    for (let i = 0; i < logins.length; i += 1) {
        const login = logins[i];

        // console.log(`Login: `, login);

        if (login === loginToFind) {
            message = `Пользователь ${loginToFind} найден.`;
            break;
        }
    }
    // console.log(message);
}

{    console.log(`Task 7.2`);
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через for...of
*/
    const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    const loginToFind = `k1widab3st`;
    let message = `Пользователь ${loginToFind} не найден.`;
    
    for (const login of logins) {
                if (login === loginToFind) {
            message = `Пользователь ${loginToFind} найден.`;
            break;
        }

    }
    // console.log(message);

}

{    console.log(`Task 7.3`);
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через break
*/


}

{    console.log(`Task 7.4`);

    /* Напиши скрипт поиска логина
    * - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
    * - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
    *
    * - Метод include() с тернарным оператором
    */
    const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    const loginToFind = `poly1scute`;



    const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;

    // console.log(message);

}

{    console.log(`Task 8`);
/* Напиши скрипт поиска самого маленького/большого числа в массиве,
* при условии, что числа уникальные (не повторяются).
*
*/

    const numbers = [51, 18, 13, 24, 7, 85, 19];
    let smallestNumber = numbers[0];

    for (const number of numbers) {
    if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    // console.log(smallestNumber);

        let biggestNumber = numbers[0];

        for (const number of numbers) {
    if (number > biggestNumber) {
            biggestNumber = number;
        }
    }
    // console.log(biggestNumber);
}

{    console.log(`Task 9`);
/* Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
*
* Элементов может быть произвольное кол-во.
* Пусть элементы массива в строке будут разделены запятой.
* 
* - Сначала через for(),
* - Потом через join()
* - 
*/

    const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`, `Bread`];
    // let string = '';
    // Должно получиться: Mango,Kiwi,Poly,Ajax

//     for (const friend of friends) {
//         string += friend + ', ';
//     }
// string = string.slice (0, string.length - 2)
//     console.log(string);

    // const string = friends.join(', ');
    // console.log(friends);
    // console.log(string);

}

{    console.log(`Task 10`);
/* Напиши функцию changeCase(string), которая заменяет регистр
* каждого символа в строе на противоположный.
* Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
*/

    const string = 'JavaScript';
    const letters = string.split('');
    let invertedString = '';

    // console.log(letters);

    for (const letter of letters) {
        // console.log(letter);

        // if (letter === letter.toLowerCase()) {
        //     console.log(`Эта буква в нижнем регистре!!! - `, letter);

        //     invertedString += letter.toUpperCase();
        // } else {
        //     invertedString += letter.toLowerCase();
        // }

        invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
    }
    // console.log(invertedString);





}

{    console.log(`Task 11`);
/* Делаем slug в URL из названия статьи (например на dev.to)
* Заголовок статьи состоит только из букв и пробелов 
* - Нормализируем строку
* - Разбиваем по словам
* - Сшиваем в строку с разделителями
*/

    // Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework'

    // const normalizedTitle = title.toLowerCase();
    // console.log(normalizedTitle);

    // const words = normalizedTitle.split(' ');
    // console.log(words);

    // const slug = words.join('-');
    // console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');

    // console.log(slug1);
    
}

{    console.log(`Task 12`);
/* Напиши скрипт, который считает сумму элементов двух массивов
*/

    const array1 = [5, 10, 15, 20];
    const array2 = [10, 20, 30];
    let total = 0;

    // for (let i = 0; i < array1.length; i += 1) {
    //     total += array1[i];
    // }

    // for (let i = 0; i < array2.length; i += 1) {
    //     total += array2[i];
    // }

    // console.log(total);

    const numbers = array1.concat(array2);

    // console.log(numbers);

    for (const number of numbers) {
        total += number;
    }

    // console.log(total);
}

{    console.log(`Task 13`);
/* Работаем с коллекцией карточек в trello
* - Метод splice()
* - Удалить
* - Добавить
* - Обновить
*/

    const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5', '0'];

    // console.table(cards);
/* 
* Удаление (по индуксу), метод indexOf()
*/

    // const cardToRemove = 'Карточка-3';
    // const index = cards.indexOf(cardToRemove);

    // console.log(index);

    // cards.splice(index, 1);
    
    // console.table(cards);

    /* 
    * Добавление (по индуксу)
   */
    // const cardToInsert = 'Карточка-6';
    // const index = 3;
    // cards.splice(index, 0, cardToInsert)

    // console.table(cards);


    /*
    * Обновление (по индексу)
   */
    
    // const cardToUpdate = 'Карточка-4';

    // cards.splice(cards.indexOf(cardToUpdate), 1, 'Обновленная Карточка-4');

    // console.table(cards);
}

{    console.log(`Task `);
/* Напиши 
*
*
*
*
* - 
* - 
* - 
* - 
*
* - 
*/





}



console.log(`Functions`);

{    console.log(`Task F-1 - массив чисел + сумма`);
/* Напиши функцию calculateTotalPrice(items)
* которая принимает массив цен (чисел) и возвращает их сумму
*
*/


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total +=value;
// }


// console.log(`Total: `, total);

const calculateTotalPrice = function (items){
    console.log(`items внутри функции: `, items);

    let total = 0

    for (const item of items) {
        total += item;
        
    }
    return total;
}

// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600
// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90])); 


}

{    console.log(`Task F-2 - перебор + логирование массива`);
/* Напиши функцию logItems(items) для перебора и логирования массива
*
*/

const logItems = function (items){

    for (const item of items) {
        // console.log(item);
    }
}

logItems([`Mango`, `Kiwi`, `Poly`, `Ajax`]);
logItems([1, 2, 3, 4, 5]);
logItems([`клавиатура`, `наушники`, `часы`]);




}

{    console.log(`Task F-3 - поиск логина`);
/* Напиши функцию findLogin(allLogins, login) для поиска логина
*
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*/

const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];


// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//        }
//     }
//     return `Пользователь ${loginToFind} не найден.`;   


const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        : `Пользователь ${loginToFind} не найден.`;
}
// console.log(findLogin(logins, `m4ngoDoge`));
// console.log(findLogin(logins, `k1widab3st`));
// console.log(findLogin(logins, `poly1scute`));
// console.log(findLogin(logins, `aj4xth3m4n`));
// console.log(findLogin(logins, `ajdfdxth4n`));
// console.log(findLogin(logins, `aj4xtdfd4n`));


}

{    console.log(`Task F-4 - поиск самого маленького числа в массиве`);
/* Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве.
* при условии, что числа уникальные (не повторяются).
*/



    // console.log(`smallestNumber: `, smallestNumber);

    const findSmallesNumber = function (numbers) {
        let smallestNumber = numbers[0];
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
        return smallestNumber;
}

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
// console.log(findSmallesNumber([51, 18, 13, 24, 7, 85, 19])); // 7

}

{   console.log(`Task F-5 - замена регистра каждого символа в строе на противоположный`);
    
/* Напиши функцию changeCase(string), которая заменяет регистр
    * каждого символа в строе на противоположный.
    * Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
    */

    const changeCase = function (string) {
        const letters = string.split('');
        let invertedString = '';

        for (const letter of letters) {
            const isInLowerCase = letter === letter.toLowerCase();

            invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
        }

        // console.log('invertedString: ', invertedString);
    
        return invertedString;

        
    }

    // console.log(changeCase('qweRTY'));
    // console.log(changeCase('mAnGo'));
    // console.log(changeCase('AjAx'));
}
    
{    console.log(`Task F-6 - URL`);
/* Напиши функцию slugigy(string), которая получает строку и возвращает URL-slug
* Строка состоит только из букв и пробелов
*/


    // const title = 'Top 10 benefits of React framework';

    // const normalizedTitle = title.toLowerCase();
    // const words = normalizedTitle.split(' ');
    // const slug = words.join('-');

    // const slug1 = title.toLowerCase().split(' ').join('-');

    // console.log(slug1);

    const slugify = function (string) {
    // const normalizedTitle = string.toLowerCase();
    // const words = normalizedTitle.split(' ');
    // const slug = words.join('-');

        
        return string.toLowerCase().split(' ').join('-');
    }


    // console.log(slugify('Top 10 benefits of React framework'));
    // console.log(slugify('Azure Static Web Apps are Awesome'));
    // console.log(slugify('Technical writing tips for non-native English speakers'));
    
    



}

{    console.log(`Task F-7 - Псевдомассив argunents и Array.from и ...`);

/*
* Псевдомассив argunents и Array.from и ...
*/
    
    // const fn = function () {
    //     console.log(arguments);

    //     const args = Array.from(arguments);

    //     console.log(args);
    // };

    // fn(1, 2, 3, 4);
    // fn(1, 2, 3, 4, 5, 6);
    // fn(1, 2, 3, 4, 5, 6, 7, 8, 9);


    // const fn = function (a, b, c, ...args) {
    //     console.log(`${a} ${b} ${c}`);
    //    console.log(args);
    // };

    // fn('hello', 1, 2, 3, 4);
    // fn('aloha', 1, 2, 3, 4, 5, 6);
    // fn('hi', 1, 2, 3, 4, 5, 6, 7, 8, 9);

/* Напиши функцию add для сложения произвольного количества аргументов (чисел)
* - Array.from()
* - Операция ... (rest)
*/

    const add = function (...args) {
        console.log(args);
        let total = 0;

        for (const arg of args) {
            total += arg;
        }

        return total;
    };


    // console.log(add(1, 2, 3,));
    // console.log(add(1, 2, 3, 4, 5, 6));
    


}

{    console.log(`Task F-8`);
/*  
* Напиши функцию filterNumbers(array [, number1, ...]), которая:
* - первым аргументом принимает массив чисел
* - после первого аргуметна может быть произвольное количество других аргументов, которые будут числами.
* - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
*  для которых есть аналог в ориганальном массиве.
*/

    const filterNumbers = function (array, ...args) {
        // console.log('array: ', array);
        // console.log('args: ', args);
        const uniqueElements = [];

        for (const element of array) {
            if (args.includes(element)) {
                uniqueElements.push(element);

                // console.log(`${element} есть везде!`);
            }
        }
        // return uniqueElements;
    };

        // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
        // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
        // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]




}

{ console.log(`Function Freelancer`);

    if (2 > 1) {
        function showMessage() {
            console.log('My Message');
    }
    }
    showMessage();

}

{ console.log(`Function Freelancer`);
}

{ console.log(`Function Freelancer`);
}

{ console.log(`Function + Function (Freelancer - Рекурсия)`);

    // function calcSumm(numOne, numTwo) {
    //     let result = 1;
    //     // Умножаем result на numOne numTwo раз в цикле
    //     for (let i = 0; i < numTwo; i++) {
    //         result *= numOne;
    //     }
    //     return result;
    // }
    // console.log(calcSumm(5, 3));

    // function calcSumm(numOne, numTwo) {
    //     if (numTwo === 1) {
    //         return numOne;
    //     } else {
    //         return numOne * calcSumm(numOne, numTwo - 1);
    //     }
    // }
    // console.log(calcSumm(5, 3));


}





{    console.log(`Task AutoCheck-21`);
/* Напиши функцию findLongestWord(string) которая принимает произвольную
* строку состоящую только из слов разделённых пробелом (параметр string) и
* возвращает самое длинное слово в этой строке.
*/
    function findLongestWord(string) {

        let arrayWords = 0;
        arrayWords = string.split(' ');
        // console.log(arrayWords);

        let maxWord = arrayWords[0];
        for (let arrayWord of arrayWords) {
            // console.log(arrayWord);

            if (arrayWord.length > maxWord.length) {
                 maxWord = arrayWord;
                // console.log(maxWord);
            } 
        } return maxWord;
    }
        // console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // jumped
        // console.log(findLongestWord("Google do a roll")) // Google
        // console.log(findLongestWord("May the force be with you")) // force
}

{    console.log(`Task AutoCheck-22`);
/* Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала
* массив всех целых чисел от значения min до max. 
* - В цикле for использовался метод push
* **** В автопроверке работает !!!
*/ 

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (i = min; i <= max; i += 1) {
 numbers.push(i);
}


  // Change code above this line
//   return numbers;
}

    // console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
    // console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
    // console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

}


{console.log('Example: Кнопочки + -')
    
    
    // const counter = {
    //     value: 0,
    //     increment() {
    //         console.log('increment -> this', this);
    //         this.value += 1;
    //     },
    //     decrement() {
    //         console.log('decrement -> this', this);
    //         this.value -= 1;
    //     },
    // };
    
    // const decrementBtn = document.querySelector('.js-decrement');
    // const incrementBtn = document.querySelector('.js-increment');
    // const valueEl = document.querySelector('.js-value');
    
    // console.log(decrementBtn);
    // console.log(incrementBtn);
    // console.log(valueEl);

    // decrementBtn.addEventListener('click', function () {
    //     console.log('Кликнули на декремент');

    //     counter.decrement();
    //     console.log(counter);
    //     valueEl.textContent = counter.value;
    // });
    
    // incrementBtn.addEventListener('click', function () {
    //     console.log('Кликнули на инкремент');

    //     counter.increment();
    //     console.log(counter);
    //     valueEl.textContent = counter.value;
    // });

}

{console.log('Example: ')

    
}

{console.log('Example: ')


}

{    console.log('Example for Freelancer: while/do while, for')

    // let num2 = 0
    // while (num2 < 6) {
    //     console.log(num2);
    //     num2++;
    // }
 
    // let num = 0;
    // do {
    //     console.log(num);
    //     num++;
    // } while (num < 6);
    
    // let num3;
    // for (num3 = 0; num3 < 6; num3++) {
    //     console.log(num3);
    // }
    // console.log(`Out of cicle: ${num3}`);

    // let num4 = 0;
    // for (; num4 < 6;) {
    //     console.log(num4);
    //     num4++;
    // }

    // let num5 = 8;
    // while (num5) {
    //     console.log(num5);
    //     num5--;
    // }

    // for (let num6 = 0; num6 < 3; num6++) {
    //     console.log(`Number: ${num6}`);
    // };

    // let num7 = 0;
    // while (num7 < 3) {
    //     console.log(num7);
    //     num7++
    // };

    // firstFor: for (let num8 = 0; num8 < 2; num8++) {
    //     for (let size8 = 0; size8 < 3; size8++) {
    //         console.log(size8);
    //         if (size8 == 1) {
    //             break firstFor;
    //         }; 
    //         console.log(num8);
    //     }
    // }

}













