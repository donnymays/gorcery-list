$(document).ready(function () {
  $("#shoppingList").submit(function (event) {
    event.preventDefault();

var groceryList = ["item1", "item2", "item3", "item4", "item5", "item6"];
var capsList = [];

groceryList.forEach(function(input) {
  var groceries = capsList.push(groceries);
});

var capsList = capsList.sort();


capsList.forEach(function(input) {
  var groceries = $("input#" + input).val();
  $("." + input).text(groceries);
  


});
  });
});