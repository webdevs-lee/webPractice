let timer;
const container = document.querySelector("#d-day-container");
const messageContainer = document.querySelector("#d-day-message");

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

const output = () => {
    console.log('환영합니다');
}

const dateFormMaker = () => {
    let year = document.querySelector('#target-year-input').value;
    let month = document.querySelector('#target-month-input').value;
    let date = document.querySelector('#target-date-input').value;

    let targetDate = new Date(`${year}-${month}-${date}`).setHours(0,0,0,0);

    return targetDate;
}

const counterMaker = (targetDate) => {
    console.log("실행중");
    const nowDate = new Date();
    const remaining = (targetDate - nowDate) / 1000;

    if (remaining <= 0) {
        messageContainer.style.display = "block";
        messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
        container.style.display = "none";
        clearInterval(timer);

    } else if (isNaN(remaining)) {
        messageContainer.style.display = "block";
        messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
        container.style.display = "none";
        clearInterval(timer);

    } else {
        container.style.display = "flex";
        messageContainer.style.display = "none";

        const remainingObj = {
            days: Math.floor(remaining / 3600 / 24),
            hours: Math.floor((remaining / 3600) % 24),
            minutes: Math.floor((remaining / 60) % 60),
            seconds: Math.floor(remaining % 60)
        }
        
        const documentObj = {
            days: document.querySelector("#days"),
            hours: document.querySelector("#hours"),
            minutes: document.querySelector("#minutes"),
            seconds: document.querySelector("#seconds"),
        }

        for (const key in documentObj) {
            documentObj[key].textContent = remainingObj[key];

        }
    }
}

const reset = () => {
    container.style.display = "none";
    messageContainer.style.display = "block";
    messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

    clearInterval(timer);
    document.querySelector("#start-btn").disabled = false;

    const target = document.querySelectorAll(".target-input");
    for (let i = 0; i < document.querySelectorAll(".target-input").length; i++) {
        target[i].disabled = false;
    }
}

const starter = () => {
    document.querySelector("#start-btn").disabled = true;

    const target = document.querySelectorAll(".target-input");
    for (let i = 0; i < document.querySelectorAll(".target-input").length; i++) {
        target[i].disabled = true;
    }

    const targetDate = dateFormMaker();

    timer = setInterval(() => {
        counterMaker(targetDate);
    }, 1000);
}

// 테스트 코드
document.querySelector("#target-year-input").value = "2024";
document.querySelector("#target-month-input").value = "04";
document.querySelector("#target-date-input").value = "05";