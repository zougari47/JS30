const timeNode = document.querySelectorAll('[data-time]');

const seconds = [...timeNode]
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((a, b) => a + b);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;
console.log(hours, minutes, secondsLeft);
