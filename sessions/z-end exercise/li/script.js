let allData = [
    {
        year: "2024",
        name: "Inside Out 2",
        thumb: "Inside_out_2.jpeg",
        reviews: "104"
    },
    {
        year: "2023",
        name: "The Taste of Things",
        thumb: "the-tast-othings.jpeg",
        reviews: "303"
    }
];


let recordsHTML = "";


for (let i = 0; i < allData.length; i++) {
    recordsHTML += `<li class="movie-item">` 
    

    recordsHTML += `<div class="movie-details">
                        <span class="movie-year">${allData[i].year}</span>
                        <span class="movie-name">${allData[i].name}</span>
                        <img class="movie-thumb" width="50" src="${allData[i].thumb}" alt="${allData[i].name}">
                        <span class="movie-reviews">${allData[i].reviews}</span>
                    </div>`;

    recordsHTML += `<div class="movie-actions">
                        <button onclick="editMovie(${i})">Edit</button>
                        <button onclick="removeMovie(${i})">Remove</button>
                    </div>`;
    
    recordsHTML += `</li>`; 
}


document.getElementById("allMovies").innerHTML = recordsHTML;
