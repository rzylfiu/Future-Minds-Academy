const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");
const movieDetailsPage = document.querySelector(".movie-details-page");


for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `
    <option value="${i}">${allMovies[i].gerne}</option>`;
   
    
};


function populateMovies(g){
    movielist.innerHTML = "";

    for (let i = 0; i < allMovies[g].movies.length; i++) {
        let movie = allMovies[g].movies[i];

        movielist.innerHTML += `<li onclick="showMovieDetails(${g}, ${i})">
        <h4>${movie.title}</h4>
        <img src="assets/img/${movie.thumb}" alt="${movie.title}">
        <p class="description">${movie.desc}</p>
        <div class="row movie-stats m0 p0">
            <div class="col m0 p0">Date: <span>${movie.date}</span> </div>
            <div class="col m0 p0">Length: <span>${movie.length} min</span> </div>
        </div>
    </li>
`;
        
    }


};



function showMovieDetails(g,i){

    const movie = allMovies[g].movies[i];

    movieDetailsPage.innerHTML = `
        <h1>${movie.title} (${movie.date.substring(6,10)})</h1>
        <h4>Date: ${movie.date} | Length: ${movie.length} min</h4>
        <div class="container">
            ${movie.trailer} 
        </div>
        <h4>Cast: ${movie.actors.join(', ')}</h4>
        <p>${movie.desc}</p>
    `;


};
populateMovies(0);
showMovieDetails(0,0);