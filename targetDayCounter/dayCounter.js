const output = () => {
    console.log('환영합니다');
}

const dateFormMaker = () => {
    let year = document.querySelector('#target-year-input').value;
    let month = document.querySelector('#target-month-input').value;
    let date = document.querySelector('#target-date-input').value;

    let targetDate = new Date(year, month-1, date).setHours(0,0,0,0);

    return targetDate;
}

const counterMaker = (targetDate) => {
    const nowDate = new Date();
    const remaining = (targetDate - nowDate) / 1000;

    const remainingDate = Math.floor(remaining / 3600 / 24);
    const remainingHours = Math.floor((remaining / 3600) % 24);
    const remainingMinutes = Math.floor((remaining / 60) % 60);
    const remainingSeconds = Math.floor(remaining % 60);

    console.log(`${remainingDate}일 ${remainingHours}시간 ${remainingMinutes}분 ${remainingSeconds}초 남음`);
}