import '../sass/_modul11.scss'
import NewsApiService from './news-service'
console.log('Repeta: ');

{ console.log('Repeta: Pagination');

    const refs = {
        searchForm: document.querySelector('.js-search-form'),
        articlesContainer: document.querySelector('.js-articles-container'),
        loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    };

    const newsApiService = new NewsApiService();

    refs.searchForm.addEventListener('submit', onSearch);
    refs.loadMoreBtn.addEventListener('click', onLoadMore);

    

    function onSearch(e) {
        e.preventDefault();
 
     newsApiService.query = e.currentTarget.elements.query.value;
     newsApiService.fetchArticles(searchQuery);

    
    }

    function onLoadMore() {
        newsApiService.fetchArticles(searchQuery);

}



    
}





    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}





{console.log('Lesson: ');




}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');


    

}





{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp: Async');


    
}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}


{console.log(': ');

    
    
    
    
    
}
