var greeting = document.getElementById('greet');
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
    var hour = hours % 12 || 12;
    var today = time.toDateString();
    clock.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)}${AmPm}`;
    date.innerHTML = `${today}`;
    if (hours >= 20) {
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        clock.style.color = "white";
        greeting.style.color = "white";
        greeting.innerHTML = 'GOOD NIGHT';
    }
}