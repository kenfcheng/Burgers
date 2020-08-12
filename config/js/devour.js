$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burger").val().trim(),
      eaten: "0",
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".eat").on("click", function (event) {
    let id = $(this).data("id");
    let newEaten = $(this).data("neweaten") === false;

    const newEatenState = {
      eaten: newEaten,
    };
    console.log("id:" + id);
    console.log("eaten:" + newEatenState.eaten);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState,
    }).then(function () {
      console.log("changed eaten state to", newEaten);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
