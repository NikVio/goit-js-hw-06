const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit );

function onFormSubmit(event) {
    event.preventDefault();

  const formData =  new FormData(event.currentTarget);

  console.log(formData);
  
  formData.forEach((value, name) => {
    console.log(`name`, name );
    console.log(`value`, value);
  });

  
}
function validateForm (form)
{
    valid = true;

        if (form.value  == "" )
        {
                alert ( "Все поля должны быть заполнены." );
                valid = false;
        }

        return valid;
}








// const form = document.querySelector('.login-form');
// console.log(form);

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
 
//   for (let event of form) {
//     if (event.value == '') {
       
//     }
      
//   }
    

//     const { email, password } = event.currentTarget.elements;

//     const data = {
//         mail: email.value,
//         password: password.value,
//     };
//     console.log(data);

  
// });








// const btn = document.querySelector('button');

// btn.addEventListener('click', onClickBtnValidateForm);

// function onClickBtnValidateForm() {
 
    
// }











// const form = document.querySelector('#login-form')

// form.addEventListener('submit', onFormSubmit );

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
    

//   console.log(formData);
  
//   formData.forEach((value, name) => {
//     console.log(`name`, name );
//     console.log(`value`, value);
//   });

//   document.getElementById("login-form").reset();
// }
// function validate_form ()
// {
//     valid = true;

//         if ( document.login-form.email.password.value == "" )
//         {
//                 alert ( "Все поля должны быть заполнены." );
//                 valid = false;
//         }

//         return valid;
// }

// console.log(validate_form(valid));

