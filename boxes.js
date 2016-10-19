"use strict";
$(document).ready(function() {
  console.log("ready!");

// 1. Set secretBox background color to white and add h1 tag
// $("#secretBox").css("background-color", "white");
// $("#secretBox").html("<h1>secret box!</h1>");

// 2. Change all red boxes to white
// $(".boxType1").css("background", "white");

// 3. Find and print to the console the child divs of the first row. Change class to boxType3.
// var rowChild = $("#row1").children();
// console.log(rowChild.length);
// rowChild.attr("class", "box boxType3");
// // rowChild.removeClass("boxType1").addClass("boxType3");
// // rowChild.removeClass("boxType2").addClass("boxType3");
// console.log(rowChild);

// 4. Make the last box in the last row disappear
// var abracadabra = $("#row4 > div:last-child").hide();
// console.log(abracadabra);

// 5. Create a variable to store the first two divs in the second row. Then, remove all styling from these two divs.
// var twoDivs = $("#row2 div:lt(2)");
// twoDivs.removeClass();

// 6. Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels. Then, log to the console a boolean that confirms that the width was correctly applied.


// 7. Using the toggle() method, make the document body disappear. Can you explain how this works? Then, make the body toggle out quickly and then back into view slowly by adding arguments to the toggle method.

// 8. Make the third div in each row invisible
$(".row :nth-child(3)").css("visibility", "hidden");

});
