const api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9e279fd978e602e8d04600c973f085a&page=1";
const img_path = "https://image.tmdb.org/t/p/w1280";
const search_url =
  "https://api.themoviedb.org/3/search/movie?api_key=f9e279fd978e602e8d04600c973f085a&query=";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//Get Initial Movies
getMovies(api);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchVal = search.value;

  if (searchVal && searchVal !== "") {
    getMovies(search_url + searchVal);
    search.value = "";
  } else {
    window.location.reload();
  }
});

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<img
    src="${img_path + poster_path}"
    alt="${title}"
    />
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRating(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h3>Overview</h3>
    ${overview}
    </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRating(rating) {
  if (rating >= 8) return "green";
  else if (rating >= 5) return "orange";
  else return "red";
}
