// Begin Business Logic


// Begin User Interface Logic
$(document).ready(function() {


// Begin Grocery List

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
    event.preventDefault();
    });
  });

// Begin Wordplay

  $("#wordplay").submit(function(event) {
    var wordPlay = $("#sentence").val();
    var wordPlayer = wordPlay.split();
    console.log(wordPlayer);
    


  event.preventDefault();
  });
});
