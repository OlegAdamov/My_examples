export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        console.log(' До запроса: ', this);
        fetch(`https://pixabay.com/api/?key=29774264-5f2b4531b82822efbb7185623&
q=${this.searchQuery}&page=${this.page}&per_page=10&image_type=photo&pretty=true`)
            .then(function (response) {
        return response.data;
            })
            .then(hits => {
                this.incrementPage()
                return hits
            })
            .catch(function (error) {
        if (error.response) {
            console.log(error.response)
        };
    });
    };

    incrementPage() {
        this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }
get query() {
    return this.searchQuery;
}

set query(newQuery) {
    this.searchQuery = newQuery;
}
}