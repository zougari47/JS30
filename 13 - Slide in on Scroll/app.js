// function that 
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const imgs = document.querySelectorAll('img');
console.log(imgs);


function checkSlide(evt){
    console.log(window.scrollY);
    imgs.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight) ;
        console.log(slideInAt);
    });
}


window.addEventListener('scroll', debounce(checkSlide));