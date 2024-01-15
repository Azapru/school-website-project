const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const back = queryParams.get("back")
var rawJson = ""

if (id != null) {
    fetch("../games/"+id+".json")
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const description = data.description;

            document.getElementById("game-title").innerText = name;
            document.getElementById("game-desc").innerText = description;
            document.getElementById("game-cover").src = "../games/"+id+".png";
            document.getElementById("play-btn-link").href = "../games/"+id+"/";

            document.title = name
        })
        .catch(error => {
            document.getElementById("frame").remove();
            document.getElementById("body").innerHTML = "<h1 style='color: red'>Error: this game ID does not exist.</h1>\n<a href='../'><img src='../assets/close.png' class='close-btn btn'></a>"
        })
} else {
    document.getElementById("frame").remove();
    document.getElementById("body").innerHTML = "<h1 style='color: red'>Error: this game ID does not exist.</h1>\n<a href='../'><img src='../assets/close.png' class='close-btn btn'></a>"
}

if (back == "search") {
    document.getElementById("close-btn").href = "../search"
} else {
    document.getElementById("close-btn").href = "../"
}