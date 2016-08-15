// Begin Business Logic
//
// var groceryList = ["grocery1", "grocery2", "grocery3", "grocery4"];

// Begin User Interface Logic
$(document).ready(function() {



  $("#userInput").submit(function(event) {
    $("#userInput").hide();
    var groceryItems = [];

    groceryItems.push($("#grocery1").val());
    groceryItems.push($("#grocery2").val());
    groceryItems.push($("#grocery3").val());
    groceryItems.push($("#grocery4").val());

    groceryItems = groceryItems.sort();

    groceryItems.forEach(function(groceryItem) {
      $("#list_output").append("<li>" + groceryItem.toUpperCase() + "</li>");
    });


    // var groceries = [$("#grocery1").val(), $("#grocery2").val(), $("#grocery3").val(), $("#grocery4").val()].sort();

    // groceries.toUpperCase();

    // groceryLists.forEach(function(groceryList) {
    //   var userInput = $("#" + groceryList).val();
    //   $("." + groceryList).text(userInput.toUpperCase());



  event.preventDefault();
    // });
  });
});
