window.alert('Click on any checkbox\nAfter clicking on the Shift Key + another checkbox\n=>it will check all checkboxes that between');
const inputs = document.querySelectorAll('input');

//clear checkboxes
window.onload = inputs.forEach(input => input.checked=false);


let inBetween = false;
let lastCheck;
function check(e){
    //check if they had the shift key down & chekc that are checking it 
    if(e.shiftKey && this.checked){
        //loop over every single checkbox
        inputs.forEach(input => {
            if(input === this || input ===lastCheck){
                inBetween=!inBetween;
            }

            if(inBetween){
                input.checked = true ;
            }
        });
    }
    lastCheck=this;
}


inputs.forEach(input => input.addEventListener('click', check));