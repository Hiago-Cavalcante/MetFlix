'use strict';

const moviesContainer = document.querySelector('.content');
const pageBtnPrevious = document.querySelector('.prevPage');
const pageBtnNext = document.querySelector('.nextPage');

const apiKey = '9b51dd245f1267676721b04d01a8e806';
const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
let page = 1;

const getMovies = async function () {
  try {
    const data = await fetch(`${baseUrl}?api_key=${apiKey}&page=${page}`);

    const res = await data.json();

    renderMovies(res);
  } catch (err) {
    console.error(err);
  }
};

const renderMovies = function (data) {
  moviesContainer.innerHTML = '';

  let htmlContent = '<div class="movie-grid">';

  for (let i = 0; i < data.results.length && i < 16; i++) {
    const movie = data.results[i];
    const vote = data.results[i].vote_average;
    htmlContent += `
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Filme ${
      i + 1
    }" />
    <div class="movie-info">
    <h4>${movie.original_title}</h4>
    <span class="movie-avarage"> ${vote.toFixed(1)} 
    </div>
    </div>
    `;
  }

  htmlContent += '</div>';

  moviesContainer.insertAdjacentHTML('beforeend', htmlContent);
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