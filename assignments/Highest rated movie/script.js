let movies = [
    {
        name: 'The Godfather',
        releaseYear: 1972,
        rating: 9.2,
        mainActors: ['Marlon Brando', 'Al Pacino', 'James Caan']
    },
    {
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        rating: 9.3,
        mainActors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
    },
    {
        name: 'Pulp Fiction',
        releaseYear: 1994,
        rating: 8.9,
        mainActors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    },
    {
        name: 'The Dark Knight',
        releaseYear: 2008,
        rating: 9.0,
        mainActors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
    },
    {
        name: 'Forrest Gump',
        releaseYear: 1994,
        rating: 8.8,
        mainActors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
    }
];




const movieCardsContainer = document.querySelector('#movie-cards');

let sortedMovies = movies.sort((a, b) => b.rating - a.rating);
sortedMovies.forEach((movie, index) => {
 
    const card = document.createElement('div');
    card.classList.add('movie-card');

    if (index === 0) {
        card.classList.add('highest-rated');
    }

    card.innerHTML = `
        <h2>${movie.name}</h2>
        <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
        <p class="rating">Rating: ${movie.rating}</p>
        <p class="actors"><strong>Actors:</strong> ${movie.mainActors.join(', ')}</p>
    `;

    movieCardsContainer.appendChild(card);
});


