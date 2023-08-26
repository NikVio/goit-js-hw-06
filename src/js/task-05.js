const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputText);

function onInputText(event) {
    const taskTarget = event.currentTarget.value;
    if (taskTarget === '') {
    return refs.span.textContent = 'Anonymous';
    }
    return refs.span.textContent = taskTarget;
   
   
   
    
};



