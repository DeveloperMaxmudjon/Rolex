document.getElementsByClassName("container")[0].style.opacity = "0";

let time = Math.random() * (3000 - 1000) + 2000;

setTimeout(function() {

  document.getElementsByClassName("container")[0].style.opacity = "1";

  document.getElementById("preloader").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 600); 

}, time);