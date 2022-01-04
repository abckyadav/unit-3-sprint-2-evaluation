let content_div = document.getElementById("content");

  let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
  console.log("cartItems:", cartItems);

  display(cartItems);

  function display(items) {
    cartItems.map(function (item) {
      let main = document.createElement("div");
      main.setAttribute("id", "main");

      let image = document.createElement("img");
      image.src = item.strMealThumb;

      let name = document.createElement("p");
      name.textContent = item.strMeal;

      let price = document.createElement("p");
      price.textContent = item.idMeal;

      let button = document.createElement("button");
      button.textContent = "Remove";
      button.setAttribute("id", "btn");
      button.addEventListener("click", function () {
        removeProducts(item);
      });

      main.append(image, name, price, button);
      content_div.append(main);
    });

    function removeProducts(item) {

    }
  }

  function redirect(){
      window.location.href= "checkout.html"
  }