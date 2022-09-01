    console.log('Repeta: ');

{ console.log('Repeta: DOM');
//     { console.log('query-selectors')
//         const magicBtn = document.querySelector('.js-magic-btn');

//         /*
//         * document.querySelector(selector) и documentSelectorAll(selector)
//         *   selector - любой валидный селектор
//         *
//         * Что возвращает?
//         */
        
//         const navEl = document.querySelector('ul');   // первый найденный     // navRef
//         // console.dir(navEl);
        
//         const navLinksEl = navEl.querySelectorAll('.site-nav__link');   // ищет только в navEl
//         // console.log('navLinksEl: ', navLinksEl);    // всю коллекцию передаёт в псевдо-массив

//          /*
//         * Document.querySelector* и Element.querySelectorAll*
//         *
//         * Что возвращает?
//         */
        
// }
    
    {console.log('Properties')
        
        
        const magicBtn = document.querySelector('.js-magic-btn');
        
        console.log('Свойства элемента (hero)')
        /* 
        * 
        * - Изображение
        * - Тексе и textContent
        * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
        */

        // // magicBtn.addEventListener('click', () => {
        //     const imageEl = document.querySelector('.hero__image');
        //     // console.log('imageEl: ', imageEl);
        //     // console.log(imageEl.src);
        //     imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
        //     imageEl.alt = 'Это новый котик'
       

        //     const heroTitleEl = document.querySelector('.hero__title');
        //     // console.log('heroTitleEl: ', heroTitleEl);
        //     // console.log(heroTitleEl.textContent);
        //     heroTitleEl.textContent = 'Я сладкий пирожочек!';
        // // });
    
        console.log('Атрибуты')
            
        
            /* 
            * 
            * - get(имя-атрибута) - вернуть значение атрибут
            * - set(имя-атрибута) - 
            * - remove(имя-атрибута) - удалить атрибут
            * - has(имя-атрибута) - проверить, есть ли атрибут? (true/false)
            */

            // console.log(imageEl.getAttribute('src'));  // для всех атрибутов
            // console.log(imageEl.src);       // для свойств объекта 
        
        
        
            /* 
            * Data-атрибуты
            */

        const actions = document.querySelectorAll('.js-actions button');
        // console.log(actions);

        // console.log(actions[1].dataset.action);


    }
    
    {console.log('Интерфейс classList')
    
  const magicBtn = document.querySelector('.js-magic-btn');
    /* 
    * - add(класс) - добавить класс
    * - remove(класс) - удалить класс
    * - toggle(класс) - переключение (если класса нет - он добавится, если класс есть - он удалится)
    * - replace(старыйКласс, новыйКласс) - заменить старый на новый
    * - contains(класс)  - проверить существование класса на элементе (true/false)
    */
        
        
        // // magicBtn.addEventListener('click', () => {
        // const navEl = document.querySelector('.site-nav');
        // console.log(navEl.classList);
        // navEl.classList.add('super-cool', 'force');
        // navEl.classList.remove('super-cool');
        // navEl.classList.replace('force', 'super-force')
        //     console.log(navEl.classList.contains('super-force'));
        // // }        );
        
        // magicBtn.addEventListener('click', () => {
        //     navEl.classList.toggle('fine');
        // });

        // const currentPageUrl = '/portfolio';

        // const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
        // console.log(linkEl);
        // linkEl.classList.add('site-nav__link--current');




      
    }
    
    
}

{ console.log('Repeta: Навигация по DOM');

/* 
* Свойства "навигации" по DOM-узлам (взять список)
* https://fecore.net.ua/books/m5ph3r-javascript/module-o7/dom-traversal.html
*/

// const navEl = document.querySelector('.site-nav')

// // const firstNavItemEl = navEl.querySelector('.site-nav__item')
//     const firstNavItemEl = navEl.firstElementChild;
//     console.log(firstNavItemEl);
// console.log(navEl.children)


}

{ console.log('Repeta: Создание элементов');

/*
* - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling),
*   append(...elems), prepend(...elems)
* - 
*/


/* 
* Создаем заголовок
*/
    
//    const titleEl = document.createElement('h1') 
//     titleEl.classList.add('page-titile')
//     titleEl.textContent = 'Это заголовок страницы :)'
//     console.log(titleEl);
    
    // document.body.appendChild(titleEl);

    
/* 
* Создаем изображение
* https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
* valais-alpine-mountains-glacier
*/

    // const imageEl = document.createElement('img');
    // imageEl.src='https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg'
    // imageEl.alt='valais-alpine-mountains-glacier'
    // imageEl.width = 640; // imageEl.setAttribute('width', 640);
    // console.log('imageEl: ', imageEl);

    // document.body.appendChild(imageEl);
    
    // const heroEl = document.querySelector('.hero');
    // // heroEl.appendChild(titleEl);
    // // heroEl.appendChild(imageEl);
    // heroEl.append(titleEl, imageEl);


/* 
* Создаем и добавляем новый пункт меню
*/
    // const navItemEl = document.createElement('li');
    // navItemEl.classList.add('site-nav__item');

    // const navLinkEl = document.createElement('a');
    // navLinkEl.href = '/profile';
    // navLinkEl.classList.add('site-nav__link');
    // navLinkEl.textContent = 'Личный кабинет';

    // navItemEl.appendChild(navLinkEl);
    // console.log(navItemEl)

    // const navEl = document.querySelector('.site-nav');

    // // navEl.appendChild(navItemEl)
    // navEl.insertBefore(navItemEl, navEl.firstElementChild);



}

{console.log('Repeta: Создание коллекции');
    

    const colorPickerOptions = [
        { label: 'red', color: '#F44336' },
        { label: 'green', color: '#4CAF50' },
        { label: 'blue', color: '#2196F3' },
        { label: 'grey', color: '#607D8B' },
        { label: 'pink', color: '#E91E63' },
        { label: 'indigo', color: '#3F51B5' },
    ];
{
    
    //     const colorPickerContainerEl = document.querySelector('.js-color-picker');

    //     const elements = [];

    //     for (let i = 0; i < colorPickerOptions.length; i += 1) {
    //         const option = colorPickerOptions[i];

    //         const buttonEl = document.createElement('button');
    // buttonEl.type = 'button';
    // buttonEl.textContent = option.label;
    // buttonEl.classList.add('color-picker__option')
    // buttonEl.style.backgroundColor = option.color;
            
    //         elements.push(buttonEl);
            
    //     }
    //     console.log(elements);
    //     colorPickerContainerEl.append(...elements);
}
    
  { console.log('colorPicker');
    //    const colorPickerContainerEl = document.querySelector('.js-color-picker');

    //     const elements = colorPickerOptions.map(option => {
   
    //         const buttonEl = document.createElement('button');
    // buttonEl.type = 'button';
    // buttonEl.classList.add('color-picker__option')
    // buttonEl.textContent = option.label;
    // buttonEl.style.backgroundColor = option.color;

    //      return buttonEl
    //     });
    // console.log(elements);
    
    //     colorPickerContainerEl.append(...elements);
}
    

 
    /* 
    * Пишем функцию для создания разметки колорпикера
    */


}

{ console.log('Repeta: ');

}





    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}





{console.log('Autocheck: ');




}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');


    

}





{    console.log('Task-Konsp: DOM');

    
{    console.log('Task-Konsp: document');

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
//     console.log(listItems);}

//     {
//         const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
//     }
    
//     {
//         //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
    }
    

}

{    console.log('Task-Konsp: Создание');

//     const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />
    
    
    
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
