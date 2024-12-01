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

const movieList = document.querySelector("#movieList");
const moviePopup = document.querySelector("#moviePopup");
const addMovieBtn = document.querySelector("#addMovieBtn")
const closePopupBtn = document.querySelector("#closePopupBtn");
const saveMovieBtn = document.querySelector("#saveMovieBtn");
const movieName = document.querySelector("#movieName");
const movieYear = document.querySelector("#movieYear");
const movieImage = document.querySelector("#movieImage");
const movieReviews = document.querySelector("#movieReviews");

let currentMovie = 0;
let editAction = false;

function listTable(){
let recordsHTML = " ";

for (let i = 0; i < allData.length; i++) {
    recordsHTML += "<ul>"
    recordsHTML += `
    <li><strong>Year:</strong> ${allData[i].year}</li>
    <li><strong>Name:</strong> ${allData[i].name}</li>
    <li><strong>Image:</strong> <img width="30" src="${allData[i].thumb}" alt="${allData[i].name}"></li>
    <li><strong>Reviews:</strong> ${allData[i].reviews}</li>
    <li><button onclick="editMovie(${i})">Edit</button>
    <button onclick="removieMovie(${i})">Remove</button></li>
`;
    recordsHTML += "</ul>"

    
}
movieList.innerHTML = recordsHTML;
};

listTable();

addMovieBtn.addEventListener('click', function(){
    moviePopup.style.display = "block";

});

closePopupBtn.addEventListener('click', function(){
    moviePopup.style.display = "none";
});

saveMovieBtn.addEventListener('click', function(){

    const newMovie = {
        year: movieYear.value,
        name: movieName.value,
        thumb: movieImage.value,
        reviews: movieReviews.value

    };

    if(editAction){
              allData[currentMovie] = newMovie;
    }else{
        allData.push(newMovie);
    }

  
    listTable();
    removeModal();
    moviePopup.style.display = "none";
});

function removeModal(){
    movieYear.value = " ";
    movieName.value = " ";
    movieImage.value = " ";
    movieReviews.value = " ";

} ;

function editMovie(m){
    editAction = true;
    currentMovie = m;
    moviePopup.style.display = "block";
    movieYear.value = allData[m].year;
    movieName.value = allData[m].name;
    movieImage.value = allData[m].thumb;
    movieReviews.value = allData[m].reviews;
};

function removieMovie(m){
    allData.splice(m,1);
    listTable();
};