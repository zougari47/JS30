const container = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; //px

function textEffect(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 #22a6b3,
  ${xWalk * -1}px ${yWalk}px 0 #95afc0,
  ${yWalk * -1}px ${xWalk * -1}px 0 #ff7979,
  ${yWalk}px ${yWalk * -1}px 0 #e056fd`;
}

container.addEventListener('mousemove', textEffect);
