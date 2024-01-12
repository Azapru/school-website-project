const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");



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
        })
        .catch(error => console.error('Error reading JSON:', error));
} else {
    console.log("bad")
}