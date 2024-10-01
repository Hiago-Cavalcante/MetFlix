'use strict';

const moviesContainer = document.querySelector('.content');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGE0NDQwYjQ0Y2M5ODJkNTc3ZTJlYzJlZWUxNDI1OCIsIm5iZiI6MTcyNzczMzQ5MC4xMDU2NTQsInN1YiI6IjY2ZmIxMzllODA3Y2Q1MWMxN2YxYWEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZsQ5oo1L7VHa1byCj-plW-2s1GEb452ZLJ0U_h61bqU',
  },
};

const getMovies = function () {
  fetch('https://api.themoviedb.org/3/discover/movie', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderMovies(data);
    })
    .catch(err => console.error(err));
};

const renderMovies = function (data) {
  const html = `
    <div class="movie-grid">
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}" alt="Filme 1" />
    <div class="movie-info">
    <h4>Filme 1</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[1].poster_path}" alt="Filme 2" />
    <div class="movie-info">
    <h4>Filme 2</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[2].poster_path}" alt="Filme 3" />
    <div class="movie-info">
    <h4>Filme 3</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[5].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>Filme 4</h4>
    </div>
    </div>
    </div>
    </div>`;

  moviesContainer.insertAdjacentHTML('beforeend', html);
};

getMovies();
