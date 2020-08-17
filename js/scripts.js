$(document).ready(function () {
  $("#shoppingList").submit(function (event) {
    event.preventDefault();

let groceryList = ["item1", "item2", "item3", "item4", "item5", "item6"];
groceryList.sort();
console.log(groceryList);




groceryList.forEach(function(input) {
  let groceries = $("input#" + input).val();
  $("." + input).text(groceries);
  


});
  });
});