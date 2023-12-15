function dropdown() {
    let wrap = document.getElementById("wrap")
    if (wrap.style.display == "none") {
        wrap.style.display = "flex"
        document.getElementById("logo").style.display = "flex"
    } else {
        wrap.style.display = "none"
        document.getElementById("logo").style.display = "none"
    }
}

document.addEventListener("keydown", Getkey)

function Getkey(Pressed) {
    Key = Pressed.key
    
    switch (Key) {
        case "y":
            y = true
            break;
        case "o":
            o = true
            break
        case "n":
            n = true
            break;
        case "k":
            k = true
            break;
        case "a":
            a = true
            break;
        case "g":
            g = true
            break;
        case "r":
            r = true
            break;
        default:
            console.log(Key)
            break;
    }

    if (y == true && o == true && n == true && k == true && a == true && g == true && r == true) {
        document.getElementById("Yon").style.visibility = "visible"
    }

    return Key
}