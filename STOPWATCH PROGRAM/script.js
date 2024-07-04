const showtimer = document.getElementById("timer");
let time = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        time = setInterval(update, 10);
        isRunning = true;
    }
}
function stop() {
    if (isRunning) {
        clearInterval(time);
        isRunning = false;
    }
}
function reset() {
    clearInterval(time);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    showtimer.innerHTML = "00:00:00:00";
}
function update() {
    elapsedTime = Date.now() - startTime;

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let min = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let sec = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    let ms = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);


    showtimer.textContent = `${hour}:${min}:${sec}:${ms}`;
}
