    import pokemonCardTpl from '../templates/pokemon-card.hbs';
import templateFunction from '../templates/pokemon-card.hbs';
document.body.innerHTML = templateFunction();



console.log('Repeta: ');

{ console.log('Repeta: fetch-api');
    /* 
    * - HTTP-запросыв браузере
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
    */




    const refs = {
        cardContainer: document.querySelector('.js-card-container'),
    }



    fetch('https://pokeapi.co/api/v2/pokemon/2')
        .then(response => {
        return response.json();
    }).then(pokemon => {
        console.log(pokemon);
                const markup = pokemonCardTpl(pokemon);
                refs.cardContainer.innerHTML = markup
    })
        .catch(error => {
            console.log(error);
        });
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





{    console.log('Task-Konsp: REST API');

    

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


{console.log(': ');

    
    
    
    
    
}
