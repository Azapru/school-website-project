var results = document.getElementById("games-list")
var searchBox = document.getElementById("search")
var gamesList = []

// Fetch games list
fetch("../games/games.json")
  .then(response => response.json())
  .then(data => {
    gamesList = data.games;

    // Loop through every game
    for (let i = 0; i < gamesList.length; i++) {
        // List every looped game
        results.innerHTML += `
            <a id="${gamesList[i][0]}" class="btn game" href="../view-game/?id=${gamesList[i][0]}">
            <img src="../games/${gamesList[i][0]}.png" class="game-thumbnail">
            <h2>${gamesList[i][1]}</h2>
            </a>
        `
    }
})
.catch(error => console.error('Error fetching JSON:', error));


function search() {
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


// Auto-focus search bar (god i hate when website don't do that)
document.addEventListener("DOMContentLoaded", function() {
    searchBox.focus();
});