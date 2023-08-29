const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${input.value}px`;





input.addEventListener('input', onInputTargetText);

  function onInputTargetText(element) {
      const targetText = element.currentTarget.value + 'px';
      spanText.style.fontSize = targetText;    
};


