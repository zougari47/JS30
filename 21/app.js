window.alert('this project build for mobile device');

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
console.log(speed, arrow);

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data.coords.speed);
    speed.textContent = data.coords.speed.toFixed(3);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    alert('Hey! you gotta allow that to happen!');
  }
);
