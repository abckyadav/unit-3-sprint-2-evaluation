let content_div = document.getElementById("content");
let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
let count = document.getElementById("count");

getProducts();

async function getProducts() {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    displayProducts(data.meals);
    console.log("data:", data.meals);
  } catch (err) {
    console.log("err:", err);
  }
}

function displayProducts(data) {
  data.map(function (products) {
    let main = document.createElement("div");
    main.setAttribute("id", "main");

    let image_div = document.createElement("div");
    image_div.setAttribute("id", "image_div");
    let image = document.createElement("img");
    image.src = products.strMealThumb;

    let text_div = document.createElement("div");
    text_div.setAttribute("id", "text_div");

    let name = document.createElement("p");
    name.textContent = products.strMeal;

    let price = document.createElement("p");
    price.textContent = `Rs.${Math.floor(Math.random()*400)+100}`;

    let button_div = document.createElement("div");
    button_div.setAttribute("id", "button_div");
    let button = document.createElement("button");
    button.textContent = "Add To Cart";
    button.setAttribute("id", "btn");

    button.addEventListener("click", function () {
      addToCart(products);
    });

    image_div.append(image);
    button_div.append(button);
    text_div.append(name, price);
    main.append(image_div, text_div, button_div);
    content_div.append(main);
  });

  function addToCart(products) {
    cartItems.push(products);

    count.innerHTML = `Total Cart Items = ${cartItems.length}`;
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log("cartItems:", cartItems);
  }
}
function cartf(){
  window.location.href = "cart.html"
}