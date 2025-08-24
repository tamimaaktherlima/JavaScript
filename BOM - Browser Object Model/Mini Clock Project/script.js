const button = document.querySelector(".btn");
const message = document.querySelector(".message");

button.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hour = formateTime(hours);
    let minute = formateTime(minutes);
    let second = formateTime(seconds);
    
    let time = hour + ":" + minute + ":" + second;
    // console.log(time);

    message.textContent = time;

    setInterval(startClock, 1000);
}

function formateTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}