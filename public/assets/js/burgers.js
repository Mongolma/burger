$(function () {
  $(".create-form").on("click", function (event) {
    // Make sure to preventDefault on a submit event
    event.preventDefault();

    var newBurger = {
      burger: $("#brgr").val().trim(),
    };

    //Send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      //Reload the page tp get the updated list
      location.reload();
    });
  });
});
