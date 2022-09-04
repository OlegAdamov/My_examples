import '../sass/_modul10.scss'
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import templateFunction from '../templates/pokemon-card.hbs';
import getRefs from './get-refs';


console.log('Repeta: ');

{ console.log('Repeta: fetch-api');
    /* 
    * - HTTP-запросы в браузере
    *  - Fetch API
    *  - Вкладка Network
    *  - HTTP-методы
    *  - Заголовки
    *  - MIME-типы
    *  - Параметры запроса
    * - Документация REST API
    * - Обработка 404 c fetch
    * - Аутентификация
    * - Библиотеки-обёртки
    * - https://pokeapi.co/
    * - 
    * Часть 3 
    * - Cross-Origin Resource Sharing (CORS)
    * - Proxy
    *   - Хранение API ключей и секретов
    * - 
    */




    const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch)
    
    function onSearch(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const searchQuery = form.elements.query.value;
    
    API.fetchPokemon(searchQuery)
        .then(renderPokemonCard)
        .catch(onFetchError)
        .finally(() => form.reset());
 }
    

    
    function renderPokemonCard(pokemon) {
                const markup = pokemonCardTpl(pokemon);
                refs.cardContainer.innerHTML = markup

    }
    function onFetchError(error) {
alert('Упс, что-т пошло не так и мы не можем найти Вашего покемона!')
    }

// ====================
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    //     .then(r => r.json())
    //     .then(console.log);

    
    
    






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







{    console.log('Task-Konsp: REST API');


}

{    console.log('Task-Konsp: AJAX');

    // fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });
    
    const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
    
}

{    console.log('Task-Konsp: ');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}


{console.log(': ');

    
    
    
    
    
}
