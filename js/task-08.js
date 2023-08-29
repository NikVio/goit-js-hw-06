const form = document.querySelector('.login-form');
 console.log(form);

 form.addEventListener('submit', (event) => {
     event.preventDefault();
      const { email, password } = event.currentTarget.elements;
      if (email.value && password.value) {
        

    const data = {
         mail: email.value,
         password: password.value,
     };
        console.log(data);
        form.reset();
      } else {
        alert('All fields must be filled out');
      }
    
});