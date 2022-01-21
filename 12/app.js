window.addEventListener('keyup', dectectKey);

const arrayCode = [];
const secretCode = 'ahmed';
function dectectKey(e){
    console.log(e.key);
    arrayCode.push(e.key);
    arrayCode.splice(-secretCode.length - 1, arrayCode.length - secretCode.length );
    
    if(arrayCode.join('') === secretCode){
        cornify_add()
    }
}
