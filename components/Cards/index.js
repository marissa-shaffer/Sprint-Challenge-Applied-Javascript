// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    let cardsContainer = document.querySelector('.cards-container');
    let jsArticles = response.data.articles.javascript;
    let bArticles = response.data.articles.bootstrap;
    let techArticles = response.data.articles.technology;
    let jQArticles = response.data.articles.jquery;
    let nodeArticles = response.data.articles.node;
    
    jsArticles.forEach((element) => {
        cardsContainer.appendChild(CARDS(element));
    })
    bArticles.forEach((element) => {
        cardsContainer.appendChild(CARDS(element));
    })
    techArticles.forEach((element) => {
        cardsContainer.appendChild(CARDS(element));
    })
    jQArticles.forEach((element) => {
        cardsContainer.appendChild(CARDS(element));
    })
    nodeArticles.forEach((element) => {
        cardsContainer.appendChild(CARDS(element));
    })
})
.catch((error) => {
    console.log(error);
})

let CARDS = (obj) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = obj.headline;

    
}