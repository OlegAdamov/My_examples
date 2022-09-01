    console.log('Repeta: ');

{ console.log('Repeta: ');
    // import pokemonCardTpl from '';

    const refs = {
        cardContainer: document.querySelector('.js-card-container'),
    }



    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            return response.json();
        })
        .then(pokemon => {
            console.log(pokemon);
            const markup = pokemonCardTpl(pokemon);
            console.log(markup)
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


{console.log(': ');

    
    
    
    
    
}
