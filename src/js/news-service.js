export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
    }

    fetchArticles() {
fetch(`https://pixabay.com/api/?key=29774264-5f2b4531b82822efbb7185623&q=${this.searchQuery}&page=1&per_page=10&image_type=photo&pretty=true`)
        .then(r => r.json())
        .then(console.log)
    }


get query() {
    return this.searchQuery;
}

set query(newQuery) {
    this.searchQuery = newQuery;
}
}