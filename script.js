var results = document.getElementById("search-frame")
var searchBox = document.getElementById("search")
var gamesList = []
var mouseOverSearch = false

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
.catch(error => console.error("Error fetching JSON:", error));


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

// Checking for input over search results frame to fix problems
results.addEventListener("mouseover", () => {
    mouseOverSearch = true
});
results.addEventListener("mouseout", () => {
    mouseOverSearch = false
});
results.addEventListener("touchstart", () => {
    mouseOverSearch = true
});
results.addEventListener("touchend", () => {
    mouseOverSearch = false
});

// Show/hide search box
setInterval(() => {
    if (document.activeElement === searchBox && searchBox.value != "") {
        results.style.display = "block"
    } else if (mouseOverSearch == false) {
        results.style.display = "none"
    }
}, 100)