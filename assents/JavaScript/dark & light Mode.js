let button = document.getElementById("darkMode");
button.onclick = function() {
    document.body.classList.toggle("Dark");
};

document.addEventListener("keydown", function(e) {
    if (e.key == "d") {
        document.body.classList.toggle("Dark");
    }
})