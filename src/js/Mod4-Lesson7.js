console.log('Repeta: ');

{console.log('Функция обратного вызова (callback): ');

/*
* - Функция может принимать другие функции как параметры
* - Функцмя, которая передается другой функции как аргумент, называется
* "функция обратного (отложенного) вызова" (callback-функция)
* - Функция, которая принимает другую функцию как параметр
* или возвращает как результат своей работы, называется
* "функцией высшего порядка"
*/

{    const fnA = function (message, callback) {
        // console.log(message);

        // console.log(callback);
        // callback(100);
        
    };
    
    const fnB = function (number) {
        // console.log('Это лог при вызове fnB', number);
    };

        fnA('afajfsdjfls', fnB)
}
    {
        const doMath = function (a, b, callback) {
            const result = callback(a, b);

            // console.log(result);
        };

        doMath(2, 3, function (x, y) { // const add = function (x, y)
            return x + y;
        });                         // };

        doMath(26, 15, function (x, y) { //const sub = function
            return x - y;
        });                     // };

                            // doMath(2, 3, add);
                            // doMath(26, 15, sub);
    }

}





{console.log('Example: Отложенный вызов: регистрация событий');

    // const buttonRef = document.querySelector('.js-button');   //  - класс кнопки в html

    // const handleBtnClick = function () {
    //     console.log('Клик по кнопке ' + Date.now());
    // };

    // buttonRef.addEventListener('click', handleBtnClick); // - слушатель события - видає помилку, знайти, яку

}

{console.log('Example: Отложенный вызов: геолокация');

    // const onGetPositionSuccess = function (position) {
    //     console.log('Это вызов onGetPositionSuccess');
    //     console.log(position);
    // }
    
    // const onGetPositionError = function (error) {
    //     console.log('Это вызов onGetPositionError');
    //     console.log(error);
    // }

    
    // window.navigator.geolocation.getCurrentPosition(
    // onGetPositionSuccess,
    //     onGetPositionError,);

}

{console.log('Example: Отложенный вызов: интервалы');

    // const callback = function () {
    //     console.log('Через 3 секунды внтури колбека в таймауте');
    // };

    // console.log('В коде перед таймаутом');

    // setTimeout(callback, 2000);

    // console.log('В коде после таймаутом');

}

{console.log('Example: Отложенный вызов: http-запрос');

    /* 
    * - API URL: HTTPS:/pokeapi.co/api/v2/pokemon
    */
    
    // const onRequestSuccess = function (response) {
    //     console.log('Вызов функци onRequestSuccess после успешного ответа бекэнда');

    //     console.log(response);
    // };

    // fetch('HTTPS:/pokeapi.co/api/v2/pokemon')
    //     .then(res => res.json())
    //     .then(onRequestSuccess);


}

{console.log('Example: Фильтр');
    

    // const filter = function (array, test) {
    //     const filteredArray = [];

    //     for (const el of array) {
    //         console.log(el);
    //         console.log(test(el));
    //     }
    //     return filteredArray;
    // };

    // 1. надо передать функцию
    // 2. функция получает элемент массива
    // 3. если элемент массива удовлетворяет условию то функция вернет true
    // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false
    
    // const callback1 = function (value) {
    //     return value >= 3;
    // }
   

    // const r1 = filter([1, 2, 3, 4, 5,], callback1)
    // console.log(r1);
    
    // const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    //     return value <= 4;
    // });
    // console.log(r2);


    // const fruits = [
    //     { name: 'apples', quantity: 200, isFresh: true },
    //     { name: 'grapes', quantity: 150, isFresh: false },
    //     { name: 'bananas', quantity: 100, isFresh: true },
    // ];

    // const getFruitsWithQuantity = function (fruit) {
    //     return fruit.quantity >= 120;
    // };

    // const r3 = filter(fruits, getFruitsWithQuantity);
    // // console.log(r3);

}

{console.log('Функция замыкания: ');

/* Функция результатом своей работы может возвращать другую функцию.
* 
* Возвращаемая функция во время вызова будет иметь доступ
* ко всем локальным переменным (области видимости)
* родительской функции (той, из которой её вернули)б
* это называется "замыкание".
*/
    
    // const fnA = function (parameter) {
    //     const innerVariable = 'значение втутренней переменной функции fnA';

    //     const innerFunction = function () {
            // console.log(parameter);
            // console.log(innerVariable);
            // console.log('Это вызов innerFunction');
    //     };
        
    //     return innerFunction;
    // };

    // const fnB = fnA(45455);

    // fnB();

    // console.log(fnB);
}

{console.log('Example: Поварёнок');



    /* 
    * 
    */
    
    // const makeDish = function (sheffName, dish) {
    //     console.log(`${sheffName} готовит ${dish}`);
    // };


    // makeDish(`Mango`, `пирожок`);
    // makeDish(`Mango`, `омлет`);
    // makeDish(`Mango`, `чай`);
    
    // makeDish('Poly', 'котлеты');
    // makeDish('Poly', 'супик');
    // makeDish('Poly', 'кофе');

    // const makeSheff = function (name) {
    //     const makeDish = function (dish) {
    //         console.log(`${sheffName} готовит ${dish}`);
    //     };

    //     return makeDish;
    // };


}

{console.log('Example: Округлятор');

    
    // const floatingPoint = 3.326445454;
    // const someInt = Math.round(floatingPoint); // 3
    // const withDecimals = Number(floatingPoint.toFixed(2)); // 3.26

    // console.log(Number(floatingPoint.toFixed(3)));
    // console.log(Number(floatingPoint.toFixed(4)));

    // const number1 = 5.125665;
    // const number2 = 12.654554;
    // console.log(Number(number1.toFixed(2)));
    // console.log(Number(number2.toFixed(4)));

    // {const rounder = function (number, places) {
    //     return Number(number.toFixed(places))
    // };

    // console.log(rounder(3.548975, 4));
    // console.log(rounder(3.55454, 3));
    // console.log(rounder(3.21578, 5));
    // console.log(rounder(3.212215465987, 7));}



    // {const rounder = function (places) {
    //     return function (number) {
    //         return Number(number.toFixed(places))
    //     }
    // }
    //     const rounder2 = rounder(2);
    //     const rounder3 = rounder(3);
    //     const rounder5 = rounder(5);
    //     const rounder7 = rounder(7);

    //     console.dir(rounder2);

    //         console.log(rounder2(3.548975));
    // console.log(rounder3(3.55454));
    // console.log(rounder5(3.21578));
    //     console.log(rounder7(3.212215465987));
    
    
    // }

}
        
{console.log('Example: Привтные данные и функции - скрытие реализации, интерфейс');

    // const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    //     let salary = baseSalary;

    //     const changeBy = function (amount) {
    //         salary += amount;   // можно убрать строку
    //     };
    

    //     return {
    //         raise(amount) {
    //             changeBy(amount);  // если убрать строку - выше, тогда salary += amount;
    //         },
    //         lower(amount) {
    //             changeBy(amount);// если убрать строку - выше, тогда salary -= amount;
    //         },
    //         current() {
    //             return `Текущая зарплата ${employeeName} - ${salary}`;
    //         },
    //     };
    // };

    // const salaryManager = salaryManagerFactory('Mango', 5000);

    // console.log(salaryManager.current());

}

{console.log('Стрелочные функции');

    /* 
    * - Объявление
    * - Явный и неявный возврат
    * - Аргумент
    * - Неявный возврат объекта
    */

// {    const add = function (a, b, c,) {
//         console.log(a, b, c);
//         return a + b + c;
//     };

//         console.log(add(5, 10, 15));
// }

// {    const addArrow = (a, b, c) => {   // {} - явный возврат
//         console.log(a, b, c);
//         return a + b + c;
//     };

//     console.log(addArrow(12, 18, 32));
// }

// {    const addArrow = (a, b, c) => a + b + c;  // !{} - НЕявный возврат
        
//     console.log(addArrow(37, 25, 69));
//     }
    

    // {const fnA = function () {
    //     return {
    //         a: 5,
    //     };
    // };
        
    //     console.log(fnA())
    
    //     const arrowFnA = () => ({arrowA: 5,})

    //     console.log(arrowFnA());
    // }

    // { console.log(`Синтаксис стрелочной функции`);
        /* 
        * 
        * - с параметрами
        * - с одним параметром
        * - без параметров
        */

        // const add = function (a, b) {
        //     return a + b;
        // };


        // const add = (a, b) => {
        //     console.log(`afaff`);
        //     return a + b;
        // }
        // console.log(add(2, 3));


        // const logMessage = message => {
        //     console.log(message)
        // };
        // logMessage(`Привет`);


        // const greet = () => {
        //     console.log(`Привет`);
        // };
        // greet();



        /*
        * Явный и неявный возврат
        */
        

        // const add = (a, b) => {
        //     return a + b;
        // }
        // console.log(add(2, 3));


        // const add = (a, b) => a + b;

        // console.log(add(2, 3));



       /*
       * Псевдомассив arguments
       */
        
        // const add = (...args) => {
        //     console.log(args);
        // };
        // add(1, 2, 3, 4, 5, 6, 7);
  //  }

    // { console.log(`Контекст стрелки`)
        
        /* 
        * Контекст внутри стрелки определяется местом её объявления,
        * а не вызова и ссылается на контекст родительской функции
        */
        
        // const showThis = () => {   // Контекст стрелки формируется и запоминается в месте её объявления
        //     console.log(`this in showThis: `, this);
        // };

        // showThis(); // this in showThis: window

        // const user = { name: `Mango` };
        // user.showContext = showThis;

        // user.showContext(); // this in showThis: window

        //         const user = {
        //     fullName: `Mango`,
        //             showName() {
        //                 console.log(`this: `, this);
        //                 console.log(`this.fullName: `, this.fullName);

        //                 const inner = () => {
        //                     console.log(`this in inner: `, this);
        //                 };

        //                 inner();
        //     },
        // };

        // user.showName();

        /*
        * 💩 Стрелки как методы объекта
        */
        
        // const user = {
        //     fullName: `Mango`,
        //     showName() {   //showName: () => {   - undefined 💩
        //         console.log(`this: `, this);
        //         console.log(`this.fullName: `, this.fullName);
        //     },
        // };

        // user.showName();

/* 
* 💩 Стрелка конструктор
*/

        // const User = function (name) {  // const User = name => {  - 💩
        //     this.name = name;
        // }

        // console.log(new User(`Mango`));




//   }
    
}

{console.log('Example: ');



}


{console.log('Example: ');



}


{console.log('Example: ');



}


{console.log('Example: ');



}


{console.log('Example: ');



}



{console.log('Autocheck: 11');

// // Change code below this line
// const filterArray = (numbers, value) => {
//   let filteredNumbers = [];

//  numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
//     console.log(filterArray([1, 2, 3, 4, 5], 3));
//     console.log(filterArray([1, 2, 3, 4, 5], 4));
//     console.log(filterArray([1, 2, 3, 4, 5], 5));
//     console.log(filterArray([12, 24, 8, 41, 76], 38));
//     console.log(filterArray([12, 24, 8, 41, 76], 20));


}

{console.log('Autocheck: 13');

function changeEven(numbers, value) {
  // Change code below this line

    let newNumbers = [];

numbers.forEach(number => {
  if (number % 2 === 0) {
    newNumbers.push(number + value);
  } else {
      newNumbers.push(number);}
});
    return newNumbers

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] += value;
//     }
//   }
  // Change code above this line
    }
    
    // console.log(changeEven([1, 2, 3, 4, 5], 10));
    // console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
    // console.log(changeEven([17, 24, 68, 31, 42], 100))
    // console.log(changeEven([44, 13, 81, 92, 36, 54], 100))

}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');


    

}



{ console.log('Task-Konsp: Императивное программирование');

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

// console.log(filteredNumbers); // [4, 5]

}

{console.log('Task-Konsp: Декларативное программирование');

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]


}

{console.log('Task-Konsp: ');




}

{console.log('Task-Konsp: Свойство event.target');

}

{console.log('Task-Konsp: ');




}



{console.log(': ');

    
    
    
    
    
}



