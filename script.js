var results = document.getElementById("search-frame")
var searchBox = document.getElementById("search")
var gamesList = []

// Fetch games list
fetch("games/games.json")
.then(response => response.json())
.then(data => {
    gamesList = data.games;

    // Loop through every game
    for (let i = 0; i < gamesList.length; i++) {
        // List every looped game
        results.innerHTML += `
            <a id="${gamesList[i][0]}" class="btn game-result" href="view-game/?id=${gamesList[i][0]}&back=home">
                ${gamesList[i][1]}
            </a>
        `
    }
})
.catch(error => console.error('Error fetching JSON:', error));


function search_games() {
    // Hide if no search
    if (searchBox.value == "") {
        results.style.display = "none"
    }

    // Don't forget kids to lower case all your searches in the code!
    var searchWord = searchBox.value.toLowerCase()

    // Search in games names
    for (let i = 0; i < gamesList.length; i++) {
        if (gamesList[i][1].toLowerCase().includes(searchWord)) {
            document.getElementById(gamesList[i][0]).style.display = ""
        } else {
            document.getElementById(gamesList[i][0]).style.display = "none"
        }
    }
}

setInterval(() => {
    if (document.activeElement === searchBox && searchBox.value != "") {
        results.style.display = "block"
    } else {
        results.style.display = "none"
    }
}, 100)