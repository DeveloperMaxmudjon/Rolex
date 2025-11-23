document.getElementById("basket").onclick = function() {
    document.getElementById("basketMenu").classList.add("showMenuFlex")
}

document.addEventListener("keydown", function (e) {
    if (e.key === "b") {
        document.getElementById("basketMenu").classList.toggle("showMenuFlex");
    }

    if (e.key === "Escape") {
        document.getElementById("basketMenu").classList.remove("showMenuFlex");
    }
});

document.getElementById("removeBasketMenu").onclick = function() {
    document.getElementById("basketMenu").classList.remove("showMenuFlex")
}

function canAdd(amount) {
    if (userBalance === 0) return true;
    if (totlePrice + amount > userBalance) {
        alert("Your balance limit is $" + userBalance);
        return false;
    }
    return true;
}

let ProductItems = 0
let productQty = document.getElementById("itemQty")
productQty.textContent = ``;

let totlePrice = 0;
let totlePriceDisplay = document.getElementById("totlePrice")
totlePriceDisplay.textContent = `$${totlePrice}`;

// Basket 1
let basketNumber = 0
let number = document.getElementById("number")
number.textContent = basketNumber

function productNumeber(productQtyDisplayId, addButtonId, removeButtonId, productPrice) {
    let qty = 1;
    let qtyDisplay = document.getElementById(productQtyDisplayId);
    qtyDisplay.textContent = qty;

    document.getElementById(addButtonId).onclick = function() {
        if (!canAdd(productPrice)) return;
        qty++;
        qtyDisplay.textContent = qty;
        totlePrice += productPrice;
        totlePriceDisplay.textContent = `$${totlePrice}`;
    };

    document.getElementById(removeButtonId).onclick = function() {
        if (qty > 1) {
            qty--;
            qtyDisplay.textContent = qty;
            totlePrice -= productPrice;
            totlePriceDisplay.textContent = `$${totlePrice}`;
        }
    };
}

function productInCart(addButtonId, productStatusInBascet, productImgId, productNameId, productPriceId,
    productImg, productName, productPrice, cartProductId, trashProductId, productQtyDisplayId) {
    
    document.getElementById(addButtonId).onclick = function() {
        if (productStatusInBascet === false) {
            let currentQty = parseInt(document.getElementById(productQtyDisplayId).textContent);
            let addAmount = productPrice * currentQty;

            if (!canAdd(addAmount)) return;

            basketNumber++;
            ProductItems++;
            productQty.textContent = `${ProductItems} Items`;
            number.textContent = basketNumber;
            productStatusInBascet = true;

            totlePrice += addAmount;
            totlePriceDisplay.textContent = `$${totlePrice}`;

            document.getElementById(productImgId).innerHTML = `<img src="${productImg}" alt="Product">`;
            document.getElementById(productNameId).textContent = productName;
            document.getElementById(productPriceId).textContent = `$${productPrice * currentQty}`;
            
            document.getElementById(cartProductId).style.display = "flex";

            document.getElementById(trashProductId).onclick = function() {
                let currentQty = parseInt(document.getElementById(productQtyDisplayId).textContent);

                basketNumber--;
                ProductItems--;
                productQty.textContent = `${ProductItems} Items`;
                number.textContent = basketNumber;
                document.getElementById(cartProductId).style.display = "none";
                productStatusInBascet = false;

                totlePrice -= productPrice * currentQty;
                totlePriceDisplay.textContent = `$${totlePrice}`;
            };
        }
    };
}

productNumeber("product1QuantityDisplay", "product1AddNumber", "product1RemoveNumber", 1245);
productInCart("product-1", false, "basketProductImg", "basketProductName", "basketProductPrice",
    "./assents/Imgs/rolexMain.png", "WATCH B720", 1245,
    "cartProduct-1", "trashProduct-1", "product1QuantityDisplay"
);

productNumeber("product2QuantityDisplay", "product2AddNumber", "product2RemoveNumber", 1050);
productInCart("product-2", false, "basketProduct2Img", "basketProduct2Name", "basketProduct2Price",
    "./assents/Imgs/Product-1.png", "Fossil", 1050,
    "cartProduct-2", "trashProduct-2", "product2QuantityDisplay"
);

productNumeber("product3QuantityDisplay", "product3AddNumber", "product3RemoveNumber", 250);
productInCart("product-3", false, "basketProduct3Img", "basketProduct3Name", "basketProduct3Price",
    "./assents/Imgs/Product-2.png", "INGERSOLL", 250,
    "cartProduct-3", "trashProduct-3", "product3QuantityDisplay"
);

productNumeber("product4QuantityDisplay", "product4AddNumber", "product4RemoveNumber", 890);
productInCart("product-4", false, "basketProduct4Img", "basketProduct4Name", "basketProduct4Price",
    "./assents/Imgs/Product-3.png", "TISSOT", 890,
    "cartProduct-4", "trashProduct-4", "product4QuantityDisplay"
);

productNumeber("product5QuantityDisplay", "product5AddNumber", "product5RemoveNumber", 1500);
productInCart("product-5", false, "basketProduct5Img", "basketProduct5Name", "basketProduct5Price",
    "./assents/Imgs/Product-4.png", "SEIKO", 1500,
    "cartProduct-5", "trashProduct-5", "product5QuantityDisplay"
);

productNumeber("product6QuantityDisplay", "product6AddNumber", "product6RemoveNumber", 1350);
productInCart("product-6", false, "basketProduct6Img", "basketProduct6Name", "basketProduct6Price",
    "./assents/Imgs/Product-5.png", "CITIZEN", 1350,
    "cartProduct-6", "trashProduct-6", "product6QuantityDisplay"
);

productNumeber("product7QuantityDisplay", "product7AddNumber", "product7RemoveNumber", 870);
productInCart("product-7", false, "basketProduct7Img", "basketProduct7Name", "basketProduct7Price",
    "./assents/Imgs/Product-6.png", "JUBILEE BLACK", 870,
    "cartProduct-7", "trashProduct-7", "product7QuantityDisplay"
);

productNumeber("product8QuantityDisplay", "product8AddNumber", "product8RemoveNumber", 650);
productInCart("product-8", false, "basketProduct8Img", "basketProduct8Name", "basketProduct8Price",
    "./assents/Imgs/Product-7.png", "FOSIL ME3", 650,
    "cartProduct-8", "trashProduct-8", "product8QuantityDisplay"
);  

productNumeber("product9QuantityDisplay", "product9AddNumber", "product9RemoveNumber", 950);
productInCart("product-9", false, "basketProduct9Img", "basketProduct9Name", "basketProduct9Price",
    "./assents/Imgs/Product-8.png", "DUCHEN", 950,
    "cartProduct-9", "trashProduct-9", "product9QuantityDisplay"
);

productNumeber("product10QuantityDisplay", "product10AddNumber", "product10RemoveNumber", 1120);
productInCart("product-10", false, "basketProduct10Img", "basketProduct10Name", "basketProduct10Price",
    "./assents/Imgs/Product-9.png", "LONGINES ROSE", 1120,
    "cartProduct-10", "trashProduct-10", "product10QuantityDisplay"
);

productNumeber("product11QuantityDisplay", "product11AddNumber", "product11RemoveNumber", 750);
productInCart("product-11", false, "basketProduct11Img", "basketProduct11Name", "basketProduct11Price",
    "./assents/Imgs/Product-10.png", "DREYFUSS GOLD", 750,
    "cartProduct-11", "trashProduct-11", "product11QuantityDisplay"
);

productNumeber("product12QuantityDisplay", "product12AddNumber", "product12RemoveNumber", 1150);
productInCart("product-12", false, "basketProduct12Img", "basketProduct12Name", "basketProduct12Price",
    "./assents/Imgs/Product-11.png", "JAZZMASTER", 1150,
    "cartProduct-12", "trashProduct-12", "product12QuantityDisplay"
);

productNumeber("product13QuantityDisplay", "product13AddNumber", "product13RemoveNumber", 1590);
productInCart("product-13", false, "basketProduct13Img", "basketProduct13Name", "basketProduct13Price",
    "./assents/Imgs/Product-12.png", "PORTUGUESE ROSE", 1590,
    "cartProduct-13", "trashProduct-13", "product13QuantityDisplay"
);

productQty.textContent = `${ProductItems} Items`;
totlePriceDisplay.textContent = `$${totlePrice}`;