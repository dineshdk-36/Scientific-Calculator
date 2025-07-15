let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
document.addEventListener('keydown', function (e) {
    const key = e.key;

    if (key === 'Enter') {
        string = eval(string);
        input.value = string;
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (
        /\d/.test(key) || 
        ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)
    ) {
        string += key;
        input.value = string;
    } else if (key.toLowerCase() === 'c') {
        string = "";
        input.value = string;
    }
});
window.onload = () => {
  input.focus();
};