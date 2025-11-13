coruselSratus = 0;
document.getElementById("next").onclick = function() {
    if (coruselSratus === 0) {
        document.getElementById("user-1").style.order = "5";
        document.getElementById("user-2").style.order = "0";
        document.getElementById("user-3").style.order = "5";
        coruselSratus++;
    } else if (coruselSratus === 1) {
        document.getElementById("user-1").style.order = "5";
        document.getElementById("user-2").style.order = "5";
        document.getElementById("user-3").style.order = "0";
        coruselSratus++;
    } else if (coruselSratus === 2) {
        coruselSratus = 0;
    }
}

document.getElementById("back").onclick = function() {
    if (coruselSratus === 0) {
        document.getElementById("user-1").style.order = "5";
        document.getElementById("user-2").style.order = "5";
        document.getElementById("user-3").style.order = "0";
        coruselSratus = 2;
    } else if (coruselSratus === 1) {
        document.getElementById("user-1").style.order = "0";
        document.getElementById("user-2").style.order = "5";
        document.getElementById("user-3").style.order = "5";
        coruselSratus--;
    } else if (coruselSratus === 2) {
        document.getElementById("user-1").style.order = "5";
        document.getElementById("user-2").style.order = "0";
        document.getElementById("user-3").style.order = "5";
        coruselSratus--;
    }
}