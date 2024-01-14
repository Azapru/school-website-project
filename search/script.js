var results = document.getElementById("games-list")
var searchBox = document.getElementById("search")
var gamesList = []

fetch("../games/games.json")
  .then(response => response.json())
  .then(data => {
    gamesList = data.games;

    for (let i = 0; i < gamesList.length; i++) {
        results.innerHTML += `
            <a id="${gamesList[i][0]}" class="btn game" href="../games/${gamesList[i][0]}/">
            <img src="../games/${gamesList[i][0]}.png" class="game-thumbnail">
            <h2>${gamesList[i][1]}</h2>
            </a>
        `
    }
})
.catch(error => console.error('Error fetching JSON:', error));


function search() {
    var searchWord = searchBox.value.toLowerCase()

    for (let i = 0; i < gamesList.length; i++) {
        if (gamesList[i][1].toLowerCase().includes(searchWord)) {
            document.getElementById(gamesList[i][0]).style.display = ""
        } else {
            document.getElementById(gamesList[i][0]).style.display = "none"
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    searchBox.focus();
});