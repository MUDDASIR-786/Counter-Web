let count = 0;

const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('incrementButton');
const decrementBtn = document.getElementById('decrementButton');
const resetBtn = document.querySelector('.b3');

function updateDisplay() {
  counterDisplay.innerText = count.toString().padStart(4, '0');
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
