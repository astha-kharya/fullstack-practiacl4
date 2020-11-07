var greeting = document.getElementById('greet');
var heart = document.getElementById('mood');
var date = document.getElementById('date');
var clock = document.getElementById('clock');
const name = document.getElementById('Name');

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function updateTime() {
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm = hours > 12 ? 'PM' : 'AM';
}