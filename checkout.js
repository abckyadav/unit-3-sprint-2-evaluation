function getAlert(e) {
    e.preventDefault();

    alert("Your order is accepted");

    setTimeout(secondAlert, 3000);
  }

  function secondAlert() {
    alert("Your order is being cooked");
    setTimeout(thirdAlert, 8000);
  }

  function thirdAlert() {
    alert("Your order is ready");
    setTimeout(fourthAlert, 10000);
  }

  function fourthAlert() {
    alert("Order out for delivery");
    setTimeout(fifthAlert, 12000);
  }

  function fifthAlert() {
    alert("Order delivered");
    alert("Thank You for shopping with us");
  }