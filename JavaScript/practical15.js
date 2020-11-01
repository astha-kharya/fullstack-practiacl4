var decrement = document.getElementById("left button");
var increment = document.getElementById("right button");

function increment() {
    decrement.disabled = true;
    decrement.style.backgroundColor = "rgb(80,130,200)";
}