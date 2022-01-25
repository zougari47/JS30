const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

function changeSpeed(e) {
  const y = e.pageY - this.offsetTop;
  const percent = (y / this.offsetHeight) * 100;
  const [min, max] = [0.25, 4];
  const height = Math.round(percent) + '%';
  bar.style.height = height;
  const playbackRate = (percent / 100) * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2);
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', changeSpeed);
