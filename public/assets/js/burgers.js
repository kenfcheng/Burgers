$(function () {
  $(".create-form").on("submit", function (event) {
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

      location.reload();
    });
  });

  $(".eat").on("click", function (event) {
    const id = $(this).data("id");
    const newEaten = $(this).data("neweaten") === false;

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

      location.reload();
    });
  });
});
