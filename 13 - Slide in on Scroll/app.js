// function that
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const imgs = document.querySelectorAll("img");

function checkSlide(evt) {
  imgs.forEach((img) => {
    // half way through the image
    console.log(img.height);
    const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    // bottom of the image
    const imgBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imgBottom;
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    }else{
      img.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
