const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    let inputText = event.currentTarget.value.length;
 if (input.textContent.length === Number(inputText)) {
    return input.classList.add('valid');
 }
   
    return input.classList.replace('valid', 'invalid');
}

        
