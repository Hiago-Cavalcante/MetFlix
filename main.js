'use strict';
const moviesContainer = document.querySelector('.content');
const pageBtnPrevious = document.querySelector('.prevPage');
const pageBtnNext = document.querySelector('.nextPage');
const modal = document.querySelector('dialog');

const apiKey = '9b51dd245f1267676721b04d01a8e806';
const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
let page = 1;

const getMovies = async function () {
  try {
    const data = await fetch(`${baseUrl}?api_key=${apiKey}&page=${page}`);
    const res = await data.json();
    renderMovies(res);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

const renderMovies = function (data) {
  moviesContainer.innerHTML = '<h3>Destaques da Semana: </h3>';

  let htmlContent = '<div class="movie-grid">';

  for (let i = 0; i < data.results.length && i < 16; i++) {
    const movie = data.results[i];
    const vote = movie.vote_average;
    htmlContent += `
    <div class="movie-card" data-movie-id="${movie.id}">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
      movie.original_title
    }" />
      <div class="movie-info">
        <h4>${movie.original_title}</h4>
        <span class="movie-average">⭐${vote.toFixed(1)}</span>
      </div>
    </div>
    `;
  }

  htmlContent += '</div>';

  moviesContainer.insertAdjacentHTML('beforeend', htmlContent);
  const movieCards = document.querySelectorAll('.movie-card');

  movieCards.forEach(card => {
    card.addEventListener('click', function () {
      const movieId = this.getAttribute('data-movie-id');
      openMovieDetails(movieId);
    });
  });
};

const openMovieDetails = async function (movieId) {
  try {
    const [movieDetails, videoDetails] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      ).then(res => res.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
      ).then(res => res.json()),
    ]);

    const trailer = videoDetails.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    renderModal(movieDetails, trailer);
    modal.showModal();
  } catch (err) {
    console.error('Error fetching movie details:', err);
  }
};

const renderModal = function (movie, trailer) {
  let trailerHtml = '';
  if (trailer) {
    trailerHtml = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
  } else {
    trailerHtml = '<p>Trailer não disponível</p>';
  }

  const htmlContent = `
    <div class="modal-content">
    <button class="btnModal" onclick="modal.close()">X</button>
      <h2>${movie.title}</h2>
      <p><strong>Release Date:</strong> ${movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐${movie.vote_average.toFixed(1)}</p>
      <p><strong>Overview:</strong> ${movie.overview}</p>
      <div class="trailer-content"> ${trailerHtml} </div>
    </div>
  `;

  modal.innerHTML = htmlContent;
};

const pageBtns = function () {
  pageBtnNext.addEventListener('click', function (e) {
    e.preventDefault();
    page++;
    getMovies();
    updateBtns();
  });

  pageBtnPrevious.addEventListener('click', function (e) {
    e.preventDefault();
    page--;
    getMovies();
    updateBtns();
  });
};

const updateBtns = function () {
  if (page > 1) {
    pageBtnPrevious.removeAttribute('disabled');
  } else {
    pageBtnPrevious.setAttribute('disabled', true);
  }
};

getMovies();
pageBtns();
