const showtimer = document.getElementById("timer");
const startbtn = document.getElementById("startbtn");
const resetbtn = document.getElementById("resetbtn");

let time = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startbtn.addEventListener("click", event => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        time = setInterval(update, 10);
        isRunning = true;

        startbtn.textContent = "STOP";
        startbtn.style.backgroundColor = 'rgb(255, 17, 0)';
        // creating hover color change property
        startbtn.addEventListener("mouseover", event => {
            startbtn.style.backgroundColor = 'rgb(190, 7, 7)';
        });
        startbtn.addEventListener("mouseout", event => {
            startbtn.style.backgroundColor = 'rgb(255, 17, 0)';
        });
    }
    else {
        clearInterval(time);
        isRunning = false;

        startbtn.textContent = "START";
        startbtn.style.backgroundColor = 'rgb(26, 227, 26)';

        // creating hover color change property
        startbtn.addEventListener("mouseover", event => {
            startbtn.style.backgroundColor = 'rgb(26, 177, 26)';
        });
        startbtn.addEventListener("mouseout", event => {
            startbtn.style.backgroundColor = 'rgb(26, 227, 26)';
        });
    }
});

resetbtn.addEventListener("click", event => {

    startbtn.textContent = "START";
    startbtn.style.backgroundColor = 'rgb(26, 227, 26)';
    // creating hover color change property
    startbtn.addEventListener("mouseover", event => {
        startbtn.style.backgroundColor = 'rgb(26, 177, 26)';
    });
    startbtn.addEventListener("mouseout", event => {
        startbtn.style.backgroundColor = 'rgb(26, 227, 26)';
    });

    clearInterval(time);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    showtimer.innerHTML = "00:00:00:00";
})

function update() {
    elapsedTime = Date.now() - startTime;

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let min = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let sec = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    let ms = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);


    showtimer.textContent = `${hour}:${min}:${sec}:${ms}`;
}
