const refs = {
    btnDecr: document.querySelector('[data-action="decrement"]'),
    btnIncr: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
}



let counterValue = 0;

refs.btnDecr.addEventListener('click', onClickBtnDecrement);
refs.btnIncr.addEventListener('click', onClickBtnIncrement);


function onClickBtnDecrement () {
   counterValue -= 1 
    refs.span.textContent = counterValue;
   
}

function onClickBtnIncrement() {
    counterValue += 1;
    refs.span.textContent = counterValue;
}
