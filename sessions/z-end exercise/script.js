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
let movieToRemove = 0;


const allMovies = document.querySelector("#allMovies");
const btnAddMovie = document.querySelector("#btnAddMovie");
const movieModal = document.querySelector(".movieModal");
const btnCancel = document.querySelector("#btnCancel");
const btnSubmit = document.querySelector("#btnSubmit");
const movieYear = document.querySelector("#movieYear");
const movieName = document.querySelector("#movieName");
const movieImage = document.querySelector("#movieImage");
const movieReviews = document.querySelector("#movieReviews");
const confirmationContainer = document.querySelector("#confirmation-container")
const confirmYes = document.querySelector("#confirm-yes")
const confirmNo = document.querySelector("#confirm-no")
const movieModalTitle = document.querySelector("#movieModalTitle");

function listTable(){
    allMovies.innerHTML = "";
for (let i = 0; i < allData.length; i++) {
  allMovies.innerHTML +=`<tr>  <td>${allData[i].year}</td>
  <td>${allData[i].name}</td>
  <td><img width="50" src="${allData[i].thumb}" alt=""></td>
  <td>${allData[i].reviews}</td>
  <td>
  <select onchange="handleMovieAction(event, ${i})">
    <option value="">Select Action</option>
    <option value="edit">Edit</option>
    <option value="remove">Remove</option>
  </select>
</td>
</tr>`;
    
}};

listTable();


btnAddMovie.addEventListener("click", function(){
movieModal.style.display = "block";
removeModal();
movieModalTitle.textContent = "Add Movie";


});

btnCancel.addEventListener("click", function(){
    movieModal.style.display = "none";

})


btnSubmit.addEventListener("click", function(){

    removeModal();
    let newMovie = {
        year: movieYear.value,
        name: movieName.value,
        thumb: movieImage.value,
        reviews: movieReviews.value,
    }
    if(editAction){
        allData[currentMovie]= newMovie;
    }
else{
    allData.push(newMovie);  
}
    listTable();
   
    movieModal.style.display = "none";

});

function removeModal(){
    movieYear.value ="";
    movieName.value ="";
    movieImage.value = "";
    movieReviews.value = "";
};

function editMovie(m){
    editAction = true;
    currentMovie = m;
movieModal.style.display = "block";
movieYear.value = allData[m].year;
movieName.value = allData[m].name;
movieImage.value = allData[m].thumb;
movieReviews.value = allData[m].reviews;
movieModalTitle.textContent = "Edit Movie";

};

function removeMovie(m){
    confirmationContainer.style.display = "flex";
    movieToRemove = m;
};

confirmYes.addEventListener("click", function(){

    allData.splice(movieToRemove, 1);
    listTable();
    confirmationContainer.style.display = "none";

});

confirmNo.addEventListener("click", function(){
    confirmationContainer.style.display = "none";

});

function handleMovieAction(e, i) {
 
    if (e.target.value === "edit") {
        editMovie(i); 
    } else if (e.target.value === "remove") {
        removeMovie(i); 
    }
    
   
    e.target.selectedIndex = 0;
}
;