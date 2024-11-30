const countDown = function() {
    const timer = document.getElementById("timer");
    timer.textContent --;
    if (timer.textContent == 0) {
    alert("Вы победили в конкурсе");
    clearInterval(timerId);
    }
    }
    timerId = setInterval(countDown, 1000);




    