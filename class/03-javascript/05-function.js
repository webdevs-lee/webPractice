const sendNumber = () => {
    let target = document.getElementById("certificatedNumber");
    let certificatedNumber = String(Math.floor((Math.random() * 1000000))).padStart(6, "0");
    
    target.innerText = certificatedNumber;
    // target.style.color = makeRandomColorAsRGB();
    target.style.color = makeRandomColorAsHex(certificatedNumber);
    clearInterval(timer);
    startTimer();
}

const makeRandomColorAsRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b}`;
}

const makeRandomColorAsHex = (hex) => {
    console.log(hex);
    return "#" + hex;
}

let time = 10;
let timer;

const myTimer = () => {
    if (time >= 0) {
        let min = Math.floor( time / 60 );
        let sec = String(time % 60).padStart(2, "0");

        time -= 1;
        document.getElementById("timer").innerText = `${min}:${sec}`;
    } else {
        document.getElementById("timer").innerText = "3:00"
        document.getElementById("certificatedButton").innerText = "인증완료";
        // document.getElementById("certificatedButton").disabled = true;

        clearInterval(timer);
    }
}

const startTimer = () => {
    time = 10;
    timer = setInterval(myTimer, 1000);
    
}

const stopTimer = () => {
    clearInterval(timer);
}