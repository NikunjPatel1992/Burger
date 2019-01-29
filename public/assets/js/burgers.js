// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured").on("click", function (event) {
    event.preventDefault();
    var devouredid = $(this).data("devouredid");
    var newDevoured = true;
    var newDevouredState = {
      devoured: newDevoured
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + devouredid, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed burger to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("deleteid");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("delete id data");
        // Reload the page to get the updated list
        // location.reload();
      }
    );
    location.reload();
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgername").val().trim()
      // devoured: $("[name=devoured]:checked").val().trim()     
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".select-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var selectBurger = {
      name: $("select").val()
      
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: selectBurger
    }).then(
      function () {
        console.log("select burger created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".update-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data("id");
    
    var updateBurger = {
      name: $("#burger").val().trim()
      // devoured: $("[name=devoured]:checked").val().trim()     
    };
    // Send the POST request.
    $.ajax("/api/burgersname/" + id , {
      type: "PUT",
      data: updateBurger
    }).then(
      function () {
        console.log("update new Burger");
        // Reload the page to get the updated list
        location.assign("/");
      }
    );
  });
});
