const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(element) {
   if (element.currentTarget.value.trim().length == input.dataset.length) {
       input.classList.add('valid')
      input.classList.remove('invalid')
      
   } else {
      input.classList.add('invalid')
      input.classList.remove('valid')
   }
}






        
