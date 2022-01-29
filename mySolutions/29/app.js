const buttons = document.querySelectorAll('button');
const textBox = document.querySelector('input');
const time = document.querySelector('.time');
const backAt = document.querySelector('.back-in');
let countdown;

function startTimer(sec) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + sec * 1000;
  const _min = then / 1000;
  displayTime(sec);
  displayBackAt(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTime(secondsLeft);
  }, 1000);
}

function displayBackAt(t) {
  const end = new Date(t);
  const _hour = end.getHours(); //end.getHours() > 12 ? end.getHours() - 12 : end.getHours();
  const _mint = end.getMinutes();
  // end.getMinutes() > 12 ? end.getMinutes() - 12 : end.getMinutes();
  backAt.textContent = `Be Back At ${_hour}:${
    _mint < 10 ? `0${_mint}` : _mint
  }`;
}

function displayTime(sec) {
  const _mint =
    Math.floor(sec / 60) < 10
      ? `0${Math.floor(sec / 60)}`
      : Math.floor(sec / 60);
  const _sec = sec % 60 < 10 ? `0${sec % 60}` : sec % 60;
  const displayString = `${_mint} : ${_sec}`;
  time.textContent = displayString;
  document.title = displayString;
}

function clickButton() {
  const sec = parseInt(this.dataset.time);
  startTimer(sec);
}

function inputEnter(e) {
  e.preventDefault();
  const mint = this.minutes.value;
  if (mint.match(/\d/)) {
    const sec = mint * 60;
    startTimer(sec);
  } else {
    alert('Please enter a number');
  }
  this.reset();
}

buttons.forEach((button) => button.addEventListener('click', clickButton));
document.customForm.addEventListener('submit', inputEnter);
