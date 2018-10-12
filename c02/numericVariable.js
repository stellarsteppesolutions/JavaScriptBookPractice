/*
Creator: steppe
Date Created: 11/12/18
Date Last Modified: 11/12/18
*/

var price = 5;
var quantity = 14;
var total = price * quantity;

var el = document.getElementById("cost")
el.textContent = "$" + total;