let coruselStatus = 0;

document.getElementById("next2").onclick = function() {
    if (coruselStatus === 0) {
        document.getElementById("productOrder-1").style.order = "5";
        document.getElementById("productOrder-2").style.order = "0";
        document.getElementById("productOrder-3").style.order = "5";
        document.getElementById("productOrder-4").style.order = "5";
        coruselStatus++;
    } else if (coruselStatus === 1) {
        document.getElementById("productOrder-1").style.order = "5";
        document.getElementById("productOrder-2").style.order = "5";
        document.getElementById("productOrder-3").style.order = "0";
        document.getElementById("productOrder-4").style.order = "5";
        coruselStatus++;
    } else if (coruselStatus === 2) {
        document.getElementById("productOrder-1").style.order = "5";
        document.getElementById("productOrder-2").style.order = "5";
        document.getElementById("productOrder-3").style.order = "5";
        document.getElementById("productOrder-4").style.order = "0";
        coruselStatus++;
    } else if (coruselStatus === 3) {
        document.getElementById("productOrder-1").style.order = "0";
        document.getElementById("productOrder-2").style.order = "5";
        document.getElementById("productOrder-3").style.order = "5";
        document.getElementById("productOrder-4").style.order = "5";
        coruselStatus = 0;
    }
}

document.getElementById("back2").onclick = function() {
    if (coruselStatus === 0) {
        document.getElementById("productOrder-1").style.order = "5";
        document.getElementById("productOrder-2").style.order = "5";
        document.getElementById("productOrder-3").style.order = "5";
        document.getElementById("productOrder-4").style.order = "0";
        coruselStatus = 3;
    } else if (coruselStatus === 1) {
        document.getElementById("productOrder-1").style.order = "0";
        document.getElementById("productOrder-2").style.order = "5";
        document.getElementById("productOrder-3").style.order = "5";
        document.getElementById("productOrder-4").style.order = "5";
        coruselStatus--;
    } else if (coruselStatus === 2) {
        document.getElementById("productOrder-1").style.order = "5";
        document.getElementById("productOrder-2").style.order = "0";
        document.getElementById("productOrder-3").style.order = "5";
        document.getElementById("productOrder-4").style.order = "5";
        coruselStatus--;
    } else if (coruselStatus === 3) {
        document.getElementById("productOrder-1").style.order = "5";
        document.getElementById("productOrder-2").style.order = "5";
        document.getElementById("productOrder-3").style.order = "0";
        document.getElementById("productOrder-4").style.order = "5";
        coruselStatus--;
    }
}