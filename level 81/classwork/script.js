



function updateClock() {
    const h1 = document.getElementById('time');
    const time = new Date();


    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    h1.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(updateClock, 1000);


updateClock();