import '../sass/_modul10.scss'
//     import pokemonCardTpl from '../templates/pokemon-card.hbs';
//     import API from './api-service'
// import templateFunction from '../templates/pokemon-card.hbs';
// import getRefs from './get-refs';
   


console.log('Repeta: ');

{ console.log('Repeta: Пагинация');

    // const options = {
    //     headers: {
    //         Authorization: '',
    //     },
    // };

    // fetch('https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5', options)
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

{console.log('Autocheck: ');


    

}





{    console.log('Task-Konsp: Пагинация');

    const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  const params = new URLSearchParams({
    _limit: 5,
    // Change the group number here
    _page: 1
  });

  return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
//   userList.innerHTML = markup;
}
}

{    console.log('Task-Konsp:Приём «Загрузить ещё»');

    const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");
const alertPopup = document.querySelector(".alert");
let isAlertVisible = false;

// Controls the group number
let page = 1;
// Controls the number of items in the group
let limit = 2;
// In our case total number of pages is calculated on frontend
const totalPages = 100 / limit;

fetchPostsBtn.addEventListener("click", () => {
  // Check the end of the collection to display an alert
  if (page > totalPages) {
    return toggleAlertPopup();
  }

  fetchPosts()
    .then((posts) => {
      renderPosts(posts);
      // Increase the group number
      page += 1;

      // Replace button text after first request
      if (page > 1) {
        fetchPostsBtn.textContent = "Fetch more posts";
      }
    })
    .catch((error) => console.log(error));
});

function fetchPosts() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page
  });

  return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
}

function toggleAlertPopup() {
  if (isAlertVisible) {
    return;
  }
  isAlertVisible = true;
  alertPopup.classList.add("is-visible");
  setTimeout(() => {
    alertPopup.classList.remove("is-visible");
    isAlertVisible = false;
  }, 3000);
}
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
