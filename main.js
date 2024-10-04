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
    <h4>${data.results[0].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[1].poster_path}" alt="Filme 2" />
    <div class="movie-info">
    <h4>${data.results[1].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[2].poster_path}" alt="Filme 3" />
    <div class="movie-info">
    <h4>${data.results[2].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[5].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[5].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[3].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[3].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[4].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[4].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[8].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[8].original_title}</h4>
    </div>
    </div>
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[10].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[10].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[6].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[6].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[7].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[7].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[11].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[11].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[12].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[12].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[13].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[13].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[14].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[14].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[15].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[15].original_title}</h4>
    </div>
    </div>
     <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${data.results[16].poster_path}" alt="Filme 4" />
    <div class="movie-info">
    <h4>${data.results[16].original_title}</h4>
    </div>
    </div>
</div>

    </div>`;

  moviesContainer.insertAdjacentHTML('beforeend', html);
};

getMovies();
