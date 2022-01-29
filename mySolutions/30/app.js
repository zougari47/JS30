const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreResult = document.querySelector('.score');
let lastHole;
let interval;
let score = 0;

function randomHole(h) {
  const randomIndex = Math.floor(Math.random() * h.length);
  const hole = h[randomIndex];
  if (hole === lastHole) {
    return randomHole(h);
  }
  return hole;
}

function startGame() {
  clearInterval(interval);
  score = 0;
  scoreResult.textContent = score;
  let seconds = 0;

  interval = setInterval(() => {
    const time = randomTime(300, 800);
    let _randomHole = randomHole(holes);
    lastHole = _randomHole;
    _randomHole.classList.add('up');

    setTimeout(function () {
      _randomHole.classList.remove('up');
    }, time);

    seconds++;
    if (seconds === 10) {
      clearInterval(interval);
      return;
    }
  }, 1000);
}

function catchMole() {
  score++;
  scoreResult.textContent = score;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

moles.forEach((mole) => mole.addEventListener('click', catchMole));
