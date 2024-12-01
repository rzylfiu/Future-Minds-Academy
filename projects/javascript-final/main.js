const games = [
    {
        id: 1,
        name: "Adventure Quest",
        thumbnail: "images/adventure-quest.png",
        plays: 1500
    },
    {
        id: 2,
        name: "Space Invaders",
        thumbnail: "images/space-invaders.png",
        plays: 1200
    },
    {
        id: 3,
        name: "Zombie Apocalypse",
        thumbnail: "images/zombie-apocalypse.png",
        plays: 900
    },
];

const gameItem = document.querySelector(".game-item")
const gameList = document.querySelector("#game-list")
const gameInfo = document.querySelector("#game-info")


    
    for (let i = 0; i < games.length; i++) {
        gameList.innerHTML += `
            <div class="game-item">
                <img src="${games[i].thumbnail}" alt="${games[i].name}">
                <div class="details">
                    <h4>${games[i].name}</h4>
                    <p>Plays: ${games[i].plays}</p>
                </div>
                <button onclick="loadGameDetails(${i})">Play Game</button>
            </div>
        `;
    }


    function loadGameDetails(i) {
        const game = games[i];
    
        gameInfo.innerHTML = `
            <div>
                <h1>${game.name}</h1>
                <img src="${game.thumbnail}" alt="${game.name}" width="50">
                <p>Number of Plays: ${game.plays}</p>
                <h1>Description</h1>
                <p>Enjoy the game!</p>
            </div>
        `;
    };

loadGameDetails(0);


