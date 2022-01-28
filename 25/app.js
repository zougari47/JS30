window.alert('this lesson was about bubbling and capture in JavaScript');

const divs = document.querySelectorAll('div');

function LogText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation();   //stop Bubbling!
}

divs.forEach((div) => div.addEventListener('click', LogText));
document.body.addEventListener('click', LogText);

// div => div.addEventListener('click', LogText, {
//     once: true //run the function one time after the event
// })
