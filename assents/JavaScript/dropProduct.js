  const sortable = document.querySelector(".productList");

  const items = document.querySelectorAll(".productRow");

  items.forEach(item => {
    item.addEventListener("dragstart", () => {
      setTimeout(() => item.classList.add("dragging"), 0);
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });
  });