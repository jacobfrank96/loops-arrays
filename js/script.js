// // loop
// var count = 1;
// var list = '';
//
// while (count < 11) {
//   list += '<li>current count is: ' + count + '</li>';
//   count += 1;
// }
//
// // output results
// document.write("<h1>Loops</h1>");
// document.write("<ol>" + list + "</ol>");
//
//
//
// // array
//
// var myItems = [
//   ["question one", "answer one"],
//   ["question two", "answer two"]
// ];
//
// var secondList ="<ul>";
// var i = 0;
//
// while (i < myItems.length) {
//     secondList += "<li>" + myItems[i] + "</li>";
//     i++;
// }
//
// secondList += "</ul>";
//
// document.write(secondList);
// begin with a blank/new order
var order = '';


// build a function to ask questions


var secondList = "<ul>";
var i = 0;
var myItems=[
  ["Would you like white rice?", "white rice"],
  ["Would you like brown rice?", "brown rice"],
  ["Would you like black beans?", " black beans"],
  ["would you like pinto beans?", "pinto beans"],
  ["Would you like chicken? ", "chicken"],
  ["Would you like steak? ", "steak"],
  ["Would you like pork? ", "pork"],
  ["Would you like mild salsa?", "mild salsa"],
  ["Would you like medium salsa?", "medium salsa"],
  ["Would you like hot salsa?", "hot salsa"],
  ["Would you like guac", "guac"]
  ["Would you like a soda?", " soda"],
  ["Would you like water?", "water"]


]
function question(questionText, item) {
  while(i<myItems.length){

  var ans = prompt(myItems[i][0]);
  if(ans.toUpperCase() === "YES")
  {
  order = order + " " +
   myItems[i][1].toUpperCase();
  }
  i++;
}


}
question();
// call the QUESTION function with the order options
// question(" Would you like white rice?", "white rice");
// question("would you like brown rice?", "brown rice");
// question(" would you like black beans?", "black beans");
// question("would you like pinto beans?", "pinto beans");
// question("Would you like chicken? ", "chicken");
// question("Would you like steak? ", "steak");
// question("Would you like pork? ", "pork");
// question("Would you like mild salsa?", "mild salsa");
// question("Would you like medium salsa?", "medium salsa");
// question("Would you like hot salsa?", "hot salsa");
// question("Would you like guac", "guac");
// question("Would you like a soda?", " soda");
// question("Would you like water?", "water");


// secondList += "<ul>";
// output their order
// document.write("<p>You ordered a burrito with: " + order + "<p>");
document.write(order);
