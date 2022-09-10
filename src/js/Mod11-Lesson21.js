import { stringify } from "uuid";

    console.log('Repeta: ');

    const BASE_URL = 'http://localhost:3000'

{ console.log('Repeta: CRUD');


/* 
- Пакет [json=server](https://github.com/typicode/json-server)
- Postman/Postwoman/Insomnia & other (фззы)
- Работа с приватными API
    - **C**reate
        - Метод POST
        - Тело
        - Заголовки
        - Ответ
    - **R**ead
        - Метод GET
        - Ответ
    - **U**pdate
        - Метод PUT & PATCH
        - Тело
        - Заголовки
        - Ответ
    - **D**elete
        - Метод DELETE
        - Ответ
- Цикл запрос-ответ
*/
 }

    {console.log('Repeta: CRUD: -get ');
   
    
    function fetchBooks() {
   return fetch(`${BASE_URL}/books`)
           .then(res => res.json());
    }
    
    function fetchBookById(bookId) {
   return fetch(`${BASE_URL}/books/${bookId}`)
           .then(res => res.json());
    }
    
    // fetchBooks();
    // fetchBookById(2);
    // fetchBookById(4);
   }


    {console.log('Repeta: CRUD: -post ');
     
// const newBook = {
//             title: "Тестовая книга по CSS",
//             author: "Я",
//             genre: ["CSS"],
//             rating: 9,
//         };



    
    function addBook(book) {
            const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };
        return fetch(`${BASE_URL}/books`, options)
            .then(res => res.json());
    }


    // addBook(
    //     {
    //         title: "Тестовая книга по HTML",
    //         author: "Я",
    //         genre: ["HTML"],
    //         rating: 8,
    //     }
    // ).then(book => {
    //     console.log(`Пришел ответ от бекенда, можна рисовать`);
    //     console.log("book");
    // })
    // .catch(error => console.log(error));

     }

{
    console.log('Repeta: CRUD: -patch ');
    

    function updateBookByID(update, bookId) {
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(update),
        };
   return fetch(`${BASE_URL}/books/${bookId}`, options)
        .then(res => res.json())

    }

// updateBookByID({title: `Большая тестовая кника по HTML`}, 7)
// updateBookByID({rating: 4}, 5)


    
    


    }

    {console.log('Repeta: CRUD: -delete ');
   
    function removeBook(bookId) {
        const url = `${BASE_URL}/books/${bookId}`;
        const options = {
            method: 'DELETE'
        }
        return fetch(url, options)
            .this(res => res.json());
    }
    
    // removeBook();





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





{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}



