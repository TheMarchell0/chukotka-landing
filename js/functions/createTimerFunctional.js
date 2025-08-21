function createTimerFunctional(timerSystem) {
    const beforeWrapper = timerSystem.querySelector('.js-timer-wrapper-before');
    const afterWrapper = timerSystem.querySelector('.js-timer-wrapper-after');

    const beforeTimer = beforeWrapper.querySelector('.js-timer');
    const afterTimer = afterWrapper.querySelector('.js-timer');

    const beforeDate = new Date(beforeTimer.getAttribute('data-target-date'));
    const currentDate = new Date();

    let activeWrapper, activeTimer;

    if (beforeDate > currentDate) {
        // Ещё не наступило время старта → активен "before"
        beforeWrapper.classList.add('active');
        afterWrapper.classList.remove('active');
        activeWrapper = beforeWrapper;
        activeTimer = beforeTimer;
    } else {
        // Старт прошёл → активен "after"
        afterWrapper.classList.add('active');
        beforeWrapper.classList.remove('active');
        activeWrapper = afterWrapper;
        activeTimer = afterTimer;
    }

    function updateTimer(timer) {
        const numberDay = timer.querySelector('.js-timer-number_day'),
            unitDay = timer.querySelector('.js-timer-unit_day'),
            numberHours = timer.querySelector('.js-timer-number_hours'),
            unitHours = timer.querySelector('.js-timer-unit_hours'),
            numberMinutes = timer.querySelector('.js-timer-number_minutes'),
            unitMinutes = timer.querySelector('.js-timer-unit_minutes');

        const targetDate = new Date(timer.getAttribute('data-target-date'));
        const currentDate = new Date();

        const difference = targetDate - currentDate;

        if (difference <= 0) {
            timer.classList.add('expired');
            return;
        }

        const secondsInMinute = 60;
        const secondsInHour = 60 * secondsInMinute;
        const secondsInDay = 24 * secondsInHour;

        const days = Math.floor(difference / (1000 * secondsInDay));
        const hours = Math.floor((difference % (1000 * secondsInDay)) / (1000 * secondsInHour));
        const minutes = Math.floor((difference % (1000 * secondsInHour)) / (1000 * secondsInMinute));

        updateDisplay(numberDay, unitDay, days, ['день', 'дня', 'дней']);
        updateDisplay(numberHours, unitHours, hours, ['час', 'часа', 'часов']);
        updateDisplay(numberMinutes, unitMinutes, minutes, ['минута', 'минуты', 'минут']);
    }

    function updateDisplay(numberElement, unitElement, value, forms) {
        numberElement.textContent = value;

        let unit;
        if (value % 10 === 1 && value % 100 !== 11) {
            unit = forms[0];
        } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
            unit = forms[1];
        } else {
            unit = forms[2];
        }

        unitElement.textContent = unit;
    }

    // Запускаем только активный таймер
    setInterval(() => updateTimer(activeTimer), 60000);
    updateTimer(activeTimer);
}

export default createTimerFunctional;
