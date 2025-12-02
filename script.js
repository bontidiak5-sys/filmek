const movies = [
  {"id":1,"title":"Csillagok háborúja","year":1977,"genre":"Sci-Fi"},
  {"id":2,"title":"A remény rabjai","year":1994,"genre":"Dráma"},
  {"id":3,"title":"A keresztapa","year":1972,"genre":"Krimi"},
  {"id":4,"title":"Mátrix","year":1999,"genre":"Sci-Fi"},
  {"id":5,"title":"Titanic","year":1997,"genre":"Romantikus"},
  {"id":6,"title":"Forrest Gump","year":1994,"genre":"Dráma"},
  {"id":7,"title":"Harry Potter és a bölcsek köve","year":2001,"genre":"Fantasy"},
  {"id":8,"title":"A Gyűrűk Ura: A Gyűrű Szövetsége","year":2001,"genre":"Fantasy"},
  {"id":9,"title":"Pókember","year":2002,"genre":"Akció"},
  {"id":10,"title":"Az oroszlánkirály","year":1994,"genre":"Animáció"},
  {"id":11,"title":"A sötét lovag","year":2008,"genre":"Akció"},
  {"id":12,"title":"Inception","year":2010,"genre":"Sci-Fi"},
  {"id":13,"title":"Joker","year":2019,"genre":"Dráma"},
  {"id":14,"title":"Gladiátor","year":2000,"genre":"Akció"},
  {"id":15,"title":"Toy Story","year":1995,"genre":"Animáció"}
];

let favorites = [];

function renderLists() {
  const movieList = document.getElementById('movieList');
  const favoritesList = document.getElementById('favoritesList');
  movieList.innerHTML = '';
  favoritesList.innerHTML = '';
  movies.forEach(movie => {
    const isFavorite = favorites.includes(movie.id);
    const div = document.createElement('div');
    div.className = 'movie-item';
    div.innerHTML = `
      <span class="star${isFavorite ? ' filled' : ''}" onclick="toggleFavorite(${movie.id})">&#9733;</span>
      <span>${movie.title} (${movie.year}) - ${movie.genre}</span>
    `;
    movieList.appendChild(div);
  });
    avorites.forEach(favId => {
    const movie = movies.find(m => m.id === favId);
    if (movie) {
      const div = document.createElement('div');
      div.className = 'movie-item';
      div.innerHTML = `<span>${movie.title} (${movie.year}) - ${movie.genre}</span>`;
      favoritesList.appendChild(div);
    }
  });
}

window.toggleFavorite = function(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    
    favorites.push(id);
  }
  renderLists(); 
};



