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

let currentMovie = 0;
let editAction = false;
let movieRemove = 0;

const allMovies = document.querySelector("#allMovies");
const btnAddMovie = document.querySelector("#btnAddMovie");
const movieModal = document.querySelector(".movieModal");
const btnCancel = document.querySelector("#btnCancel");
const movieYear = document.querySelector("#movieYear");
const movieName = document.querySelector("#movieName");
const movieImage = document.querySelector("#movieImage");
const movieRewies = document.querySelector("#movieRewies");
const btnSubmit = document.querySelector("#btnSubmit");
const confirmationContainer = document.querySelector("#confirmation-container")
const confirmYes = document.querySelector("#confirm-yes");
const confirmNo = document.querySelector("#confirm-no");

function listTable() {
    let recordsHTMl = "";
    for (let i = 0; i < allData.length; i++) {
        recordsHTMl += "<tr>";
        recordsHTMl += `            <td>${allData[i].year}</td>
       <td>${allData[i].name}</td>
       <td><img width="50" src="${allData[i].thumb}" alt=""></td>
       <td>${allData[i].reviews}</td>
       <td>
           <button onclick="editMovie(${i})">Edit</button>
           <button onclick="removeMovie(${i})">Remove</button>
       </td>`;
        recordsHTMl += "</tr>";

    }
    allMovies.innerHTML = recordsHTMl;
};
listTable();


btnAddMovie.addEventListener("click", function () {
    movieModal.style.display = "block";
});

btnCancel.addEventListener("click", function () {
    movieModal.style.display = "none";
});

btnSubmit.addEventListener("click", function () {

    const newMovie = {
        year: movieYear.value,
        name: movieName.value,
        thumb: movieImage.value,
        reviews: movieRewies.value,
    };
    if (editAction) {
        allData[currentMovie] = newMovie;  
    }
    else {
      allData.push(newMovie);
    }
    listTable();
    removeModal();
    movieModal.style.display = "none";

});

function removeModal() {
    movieYear.value = " ";
    movieName.value = " ";
    movieImage.value = " ";
    movieRewies.value = " ";

}

function editMovie(m) {
    movieModal.style.display = "block";
    currentMovie = m;
    editAction = true;
    movieYear.value = allData[m].year;
    movieName.value = allData[m].name;
    movieImage.value = allData[m].thumb;
    movieRewies.value = allData[m].reviews;


};


function removeMovie(m){
    confirmationContainer.style.display ="flex";
    movieRemove = m;


};

confirmYes.addEventListener("click", function(){
    allData.splice(movieRemove, 1);
    listTable();
    confirmationContainer.style.display ="none";
});



confirmNo.addEventListener("click", function(){
    confirmationContainer.style.display ="none";

});