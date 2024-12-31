let count = 0;

const counterDisplay = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');


function updateCounter() {
    counterDisplay.textContent = count;
}

increaseButton.addEventListener('click', function() {
    count++;
    updateCounter();
});

decreaseButton.addEventListener('click', function() {
    count--;
    updateCounter();
});
