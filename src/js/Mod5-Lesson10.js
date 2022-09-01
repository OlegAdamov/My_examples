    console.log('Repeta: ');

{ console.log('Repeta: Прототип Объекта');

    
    /* 
    * 
    * - https://miro.com/app/board/o9]_ku0WE0=/
    * - Object.create()
    * - [[Prototipe]] и __proto__
    * - Object.getPrototypeOf()
    * - Собственные свойства и Object.prototype.hasOwnProperty()
    * - Цепочка прототипов 
    */
    
    // const objC = {
    //     z: 5,
    // };
    // // console.log("objC: ", objC);


    // const objB = Object.create(objC);
    // objB.y = 2;

    // // console.log("objB: ", objB);

    // // console.log(objB.y);
    // // console.log(objB.z);

    // const objA = Object.create(objB);
    // objA.x = 1;

    // console.log("objA: ", objA.z);    // 'Это свойство на объекте-прототипе'

    // objA.z = 1000;

    // console.log("objA: ", objA);    // 'Это собственное свойство объекта'
    // console.log("objC: ", objC);

    // console.log(objA.hasOwnProperty('x')); // Поиск свойства в объекте (собственное - true / на объекте-прототипе - false)


    
    /*
    * Алгоритм поиска свойства в цепочке прототипов:
    * 1. Поиск начинается в собственных свойствах
    * 2. Если свойства нет в собственных, поиск переходит к цепочке прототипов
    * 3. Поиск прекращается при первом совпадении (есть такое свойство)
    * 4. Возвращается значение свойства
    */
    
    
    
}

{ console.log('Repeta: Основы ООП: класс, экземпляр (объект), интерфейс');

    /* 
    * Функции-конструкторы
    * - Именование
    * - Оператор new
    * - Свойство Function.prototype
    */
    
    const Car = function ({brand, model, price} = {})  {         // (config = {}) {
        // console.log(config);
                                                              // const { brand, model, price } = config;
    // 2. Функция вызывается в контексте созданного объекта, 
    //    то есть в this записывается ссылка на него
        // console.log(this);
        this.brand = brand
        this.model = model;
        this.price = price;

            // 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
    //    то есть Car.prototype это ПРОТОТИП будущего объекта (экземпляра) - {constructor: f}




   
    // 4. Ссылка на объект возвращается в место вызова new Car
    };

    Car.prototype.sayHi = function () {
        // console.log('Car.prototype.sayHi -> this', this);
        // console.log('Hello ');
    };

            Car.prototype.changePrice = function (newPrice) {
            this.price = newPrice;
        };

    // console.log(Car.prototype);

    // 1. Если функция вызывается через new, создается пустой объект
    const myCar = new Car({
        brand: 'Audi',
        model: 'Q3',
        price: 35000,
    });
    // console.log(myCar);

    myCar.sayHi();
    
    const myCar2 = new Car({
        brand: "BMW",
        model: 'X6',
        price: 50000,
    });
    
    // console.log(myCar2);

        myCar2.sayHi();

    
    const myCar3 = new Car({
        brand: "Audi",
        model: 'A6',
        price: 65000,
    });
    // console.log(myCar3);

        myCar3.sayHi();


  const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
  };

  User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
  }

    const mango = new User({email: 'mango@mail.com', password: 111111})
  
  mango.changeEmail('my-nwe-mail@mail.com')
  // console.log(mango);
  
  
  // 1. У каждого объекта есть свойство __proto__
  // 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой объект
  // 3. При создании литерала объекта, в свойство __proto__ записывается ссылка на 
  //    Функция.ptototype
  // 4. Функция-конструктор это просто функция :)
  // 5. Всю "магию" делает оператор new
  // 6. Если функция вызывается через new, создается пустой объект
  // 7. Функция вызывается в контексте созданного объекта, 
  //    то есть в this записывается ссылка на него
  // 8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype
  //    то есть Функция.prototype это ПРОТОТИП будущего объекта (экземпляра) - {constructor: f}
  // 9. Ссылка на объект возвращается в место вызова new Функция( )


  console.log('Repeta: Статические методы и свойства');
/* 
* - Статические свойства и методы доступны только на самом конструкторе
* - В статических методах не нужен this
*/

  User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.'
  
  User.logInfo = function (obj) {
    console.log(obj);
  };
  
  // console.dir(User);
  
  // console.log(Math.round(5.1));
  // console.log(Math.PI);
  
  
  

}

{console.log('Repeta: Классы');
  

  /* 
  * - Объявления
  * - конструктор
  * - методы
  * - static
  * - приватные свойства
  * - синтаксис публичных свойств и методы классов 
  * - геттеры и сеттеры
  */

{  class Car1 {
    static description = 'Класс описывающий автомобиль';

    static logInfo(carObj) {
      // console.log('Car.logInfo -> carObj', carObf);
    }

    constructor( { brand, model, price } = {} ) { 
      // console.log('Выполняется constructor');
      // console.log(this);

      this.brand = brand;
      this.model = model;
      this.price = price;
}
      changePrice(newPrice) {
        this.price = newPrice;
      };
    
    updateModel(newModel) {
      this.model = newModel;
      }
  }
  
  // console.dir(Car1);

  // console.log(Car1.description)

  const carInstance = new Car1({
  brand: 'Audi',
    model: 'Q3',
      price: 35000,
});
  
  // console.log(carInstance);
  
}

  {
    // console.log('геттеры и сеттеры')
    class Car2 {
      static description = 'Класс описывающий автомобиль';

      constructor({ brand, model, price } = {}) {
        // console.log('Выполняется constructor');
        // console.log(this);

        this._brand = brand;
        this._model = model;
        this._price = price;
      }

      get price() {
        return this._price;
      }

      set price(newPrice) {
        this._price = newPrice;
      }
    
      get model() {
        return this._model;
      }

      set model(newModel) {
        this._model = newModel;
      }
    }

  const carInstance = new Car2({
  brand: 'Audi',
    model: 'Q3',
      price: 35000,
});

    // console.log(carInstance);

    // console.log(carInstance.model);
    carInstance.model = 'Q7';
    // console.log(carInstance.model);

    // console.log(carInstance.price);
    carInstance.price = 50000;
    // console.log(carInstance.price);
  }
  

}

{console.log('Repeta: Наследование');
/* 
* - extends
* - super()
*/
  
  class Hero {
    constructor(name = 'hero', xp = 0) { // ({ name = 'hero', xp = 0 } = {})
      this.name = name;
      this.xp = xp;
    }

    gainXp(amount) {
      // console.log(`${this.name} получает ${amount} опыта`);
      this.xp += amount;
    }
  }

  // const mango = new Hero({ name: 'mango', xp: 1000 });
  // console.log(mango);
  
  class Warrior extends Hero {
    constructor(name, xp, weapon) {    // (config)
      super(name, xp);    // (config)

      this.weapon = weapon;
    }

    attack() {
      // console.log(`${this.name} атакует используя ${this.weapon}`);
}
  }

  class Berserk extends Warrior {
    constructor(name, xp, weapon, warcry) {
      super(name, xp, weapon);

      this.warcry = warcry;
    }

    babyRage() {
      // console.log(this.warcry);
    }
  }
  
  const ajax = new Berserk('ajax', 679, 'axe', 'waaaaaaah');
  // console.log(ajax);

    class Mage extends Hero {
      constructor(name, xp, spells = []) {
        super(name, xp, spells);

        this.spells = spells;
      }

      cast() {
        // console.log(`${this.name} что-то там кастует 🎈`);
      }
    }
    
    
    
    
  

  const mango = new Warrior('mango', 1000, 'алебарда'); //({ name: 'mango', xp: 1000, weapons: 50 })
  // console.log(mango);
  mango.gainXp(1000);
  mango.attack();
  mango.gainXp(19000);

  const poly = new Mage('poly', 500, ['фаербол'])
  // console.log(poly);
  poly.cast();
  poly.gainXp(300);


//   console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
//   );
  
//   console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
//   );
 

// console.log(
//   'Hero.prototype.__proto__ === Object.prototype ',
//   Hero.prototype.__proto__ === Object.prototype,
// );

}


    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}





{console.log('Autocheck: 12');

class Car {
  // Change code below this line
    #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  };

  getBrand() {
    return this.#brand;
  };
  
  changeBrand(newBrand) {
    this.#brand = newBrand;
  };

  // Change code above this line
    }
    
    // console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));


}

{console.log('Autocheck: 17');

    class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
static checkPrice(price) {
    return (price > Car.#MAX_PRICE)
        ? "Error! Price exceeds the maximum"
        : "Success! Price is within acceptable limits";
}



  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 34000 });
const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"




}

{console.log('Autocheck: ');


    

}





{    console.log('Task-Konsp: ООП');
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

// console.log(getWage(baseSalary, overtime, rate));
   
    
    const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
    };
// console.log(employee.getWage());
    {
        // console.log('Метод: Object.create(obj)')
    
        const animal = {
            legs: 4,
        };
        const dog = Object.create(animal);
        dog.name = "Манго";

        // console.log(dog);
        // console.log(animal.isPrototypeOf(dog));

        // console.log(dog.hasOwnProperty("name"));
        // console.log(dog.name);
        
        // console.log(dog.hasOwnProperty("legs"));
        // console.log(dog.legs);
    }
    {
        const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
     if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks, eats
}
  }  
}

{    console.log('Task-Konsp: class - static');

  class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}


{console.log(': ');

    
    
    
    
    
}
