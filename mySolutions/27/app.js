const items = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isDown = true;
  items.classList.add('active');
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
  console.log(startX);
});

items.addEventListener('mouseleave', () => {
  isDown = false;
  items.classList.remove('active');
});

items.addEventListener('mouseup', () => {
  isDown = false;
  items.classList.remove('active');
});

items.addEventListener('mousemove', (e) => {
  if (!isDown) return; //stop running function
  console.log(isDown);
  e.preventDefault();
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startX) * 1.5;
  items.scrollLeft = scrollLeft - walk;
});
