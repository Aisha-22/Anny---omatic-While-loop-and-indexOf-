// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
    
// }

// alert("YAY! WE MADE IT!");

// if(answer === "yes") {
//     alert("YAY! WE MADE IT!");
// } else {

// }

// Version 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

document.getElementById("yes").innerHTML = " YAY! WE MADE IT!";
