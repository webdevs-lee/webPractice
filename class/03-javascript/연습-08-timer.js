let time = 180;
let timer = setInterval(function() {
    if (time >= 0) {
        let min = Math.floor( time / 60 );
        let sec = String(time % 60).padStart(2, "0");

        console.log(`${min}:${sec}`)
        time -= 1;

    }
    
}, 1000)