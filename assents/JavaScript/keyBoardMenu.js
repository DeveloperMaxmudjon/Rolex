const keyMenu = document.getElementById("keyMenu");
const productMenu = document.getElementById("removeProduct");

document.addEventListener("keydown", (e) => {
  if (e.key === "Meta") {
    keyMenu.classList.add("showMenuFlex");
  }

  if (e.key === "r") {
    productMenu.classList.toggle("showMenuFlex");
  }

  if (e.key === "Escape") {
    if (keyMenu) keyMenu.classList.remove("showMenuFlex");
    if (productMenu) productMenu.classList.remove("showMenuFlex");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Meta") {
    keyMenu.classList.remove("showMenuFlex");
  };
});

document.getElementById("close").onclick = function() {
  productMenu.classList.remove("showMenuFlex");
}
function removeProduct(removeId, cartRemove) {
  const product = document.getElementById(removeId)
  const cart = document.getElementById(cartRemove)
  product.style.display = "none"
  cart.style.display = "none"
}