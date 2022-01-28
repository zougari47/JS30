const code = document.querySelector('.code');
const button = document.querySelector('button');

function showCode() {
  console.log('hi');
  if (button.textContent === 'See Code') {
    code.classList.add('active');
    button.textContent = 'Hide Code';
  } else {
    code.classList.remove('active');
    button.textContent = 'See Code';
  }
}

button.addEventListener('click', showCode);
console.log(button);
