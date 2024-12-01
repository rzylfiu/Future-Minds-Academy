const gameCategory = document.querySelector("#gameCategory");
const gameList = document.querySelector("#gameList");
const gameDetails = document.querySelector(".game-details");


for (let i = 0; i < allGames.length; i++) {
    
    gameCategory.innerHTML += `  <option value="${i}">${allGames[i].category}</option>`;
};

function gamesCategory (g){
    gameList.innerHTML = "";
    for (let i = 0; i < allGames[g].games.length; i++) {
        const games = allGames[g].games[i];

        gameList.innerHTML += `<li onclick="viewGame(${g}, ${i})">
        <h1>${games.title}</h1>
        <p>${games.description}</p>
        <h3>${games.releaseDate}</h3>
        <h4>${games.playTime}</h4></li>
       
       `;
        
    }


};
function viewGame(g, i) {
    const games = allGames[g].games[i];
    gameDetails.innerHTML = ` 
    <h2 id="gameTitle">${games.title}</h2>
    <p id="gameDesc">${games.description}</p>
    <div id="gameInfo">
        <p id="gameReleaseDate">${games.releaseDate}</p>
        <p id="gameLength">${games.playTime}</p>
    </div>
`;
}

function removeGameDetails(){

    gameDetails.innerHTML = "";
};

gamesCategory(0);
viewGame(0,0);