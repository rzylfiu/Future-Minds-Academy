const movieGernes = document.querySelector(".movieGernes");
const movieList = document.querySelector(".movielist");
const movieDetails = document.querySelector(".movie-details-page");

console.log(allMovies[1]);

// allMovies.forEach((data, i) => {
//   const option = document.createElement("option");
//   option.textContent = data.gerne;
//   option.value = i;
//   movieGernes.appendChild(option);
// });

for (let i = 0; i < allMovies.length; i++) {
  let data = allMovies[i];
  const option = document.createElement("option");
  option.textContent = data.gerne;
  option.value = i;
  movieGernes.appendChild(option);
}

movieGernes.addEventListener("change", (e) => {
  populateMovies(e.target.value);
});

function populateMovies(g) {
  movieList.innerHTML = "";
  let currentGerne = allMovies[g];

  for (let i = 0; i < currentGerne.movies.length; i++) {
    const movie = currentGerne.movies[i];

    const list = document.createElement("li");

    list.addEventListener("click", () => {
      selectedMovie(list, g, i);
    });

    const headerFour = document.createElement("h4");
    headerFour.textContent = movie.title;

    let img = document.createElement("img");
    img.src = `assets/img/${movie.thumb}`;
    img.alt = movie.title;

    let paragraph = document.createElement("p");
    paragraph.classList.add("description");
    paragraph.textContent = movie.desc;

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("row", "movie-stats", "m0", "p0");

    let firstDiv = document.createElement("div");
    firstDiv.classList.add("col", "m0", "p0");
    firstDiv.textContent = "Date: ";

    let firstSpan = document.createElement("span");
    firstSpan.textContent = movie.date;

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("col", "m0", "p0");
    secondDiv.textContent = "Length: ";

    let secondSpan = document.createElement("span");
    secondSpan.textContent = movie.length;

    firstDiv.appendChild(firstSpan);
    secondDiv.appendChild(secondSpan);

    mainDiv.appendChild(firstDiv);
    mainDiv.appendChild(secondDiv);

    list.appendChild(headerFour);
    list.appendChild(img);
    list.appendChild(paragraph);
    list.appendChild(mainDiv);

    movieList.appendChild(list);
  }

  loadDetailPage(g, 0);
}

function loadDetailPage(g, i) {
  let currentGerne = allMovies[g];
  let movie = currentGerne.movies[i];

  let mainHeader = document.createElement("h1");
  mainHeader.textContent = movie.title;

  let secondHeader = document.createElement("h4");
  secondHeader.textContent = `Date: ${movie.date} | Length: ${movie.length}`;

  let Div = document.createElement("div");
  Div.classList.add("container");

  let thirdHeader = document.createElement("h4");
  thirdHeader.textContent = "Actors: " + movie.actors;

  let ph = document.createElement("p");
  ph.textContent = movie.desc;

  Div.innerHTML = movie.trailer;

  movieDetails.innerHTML = "";
  movieDetails.appendChild(mainHeader);
  movieDetails.appendChild(secondHeader);
  movieDetails.appendChild(Div);
  movieDetails.appendChild(thirdHeader);
  movieDetails.appendChild(ph);
}

function selectedMovie(li, g, i) {
  let selected = document.querySelector(".selected-movie");
  if (selected) {
    selected.classList.remove("selected-movie");
  }
  li.classList.add("selected-movie");

  loadDetailPage(g, i);
}

populateMovies(0);
loadDetailPage(0, 0);
