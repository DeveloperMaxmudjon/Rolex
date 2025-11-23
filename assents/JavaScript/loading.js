document.getElementsByClassName("container")[0].style.opacity = "0";
document.getElementById("notif").style.display = "none"
let time = Math.random() * (3000 - 1000) + 2000;

setTimeout(function() {

  document.getElementsByClassName("container")[0].style.opacity = "1";

  document.getElementById("preloader").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 600); 


  if (window.innerWidth <= 900) {
    document.getElementById("notif").style.display = "none"
  } else {
    document.getElementById("noteText").style.right = "0px"
    document.getElementById("notif").style.display = "block"

    setTimeout(() => {
      document.getElementById("noteText").style.opacity = "0";
      document.getElementById("notif").style.opacity = "0"
      document.getElementById("notif").style.display = "none"
    }, 5000); 
  }

  const windowDispay = document.getElementById("windowDispay")
  addEventListener("resize", function() {
    windowDispay.innerHTML = `${window.innerWidth}px`
  })


setTimeout(AdBanner, 2000);

function AdBanner() {
  const ad = document.getElementById("adBanner");
  const closeBtn = document.getElementById("ad-close");
  let timer = 15;

  ad.style.display = "block";
  closeBtn.innerHTML = timer;

  const timerInterval = setInterval(() => {
    timer--;

    if (timer <= 0) {
      clearInterval(timerInterval);
      closeBtn.innerHTML = "✕";
      
      // Теперь можно закрывать рекламу
      closeBtn.onclick = btnClose;
    } else {
      closeBtn.innerHTML = timer;
    }
  }, 1000);
}

function btnClose() {
  const ad = document.getElementById("adBanner");
  ad.style.display = "none";

  setTimeout(() => {
    AdBanner()
  }, 30000);
}

}, time);
