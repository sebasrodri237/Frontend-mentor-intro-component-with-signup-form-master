const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const mail = document.getElementById("mail").placeholder;
const password = document.getElementById("password");
const buttonSend = document.getElementById("button_send");

const form  = document.getElementsByTagName('form');

const mailError = document.getElementsByClassName("register-container__error");

console.log(mail);

// mail.addEventListener('input', function (event) {
//   // Cada vez que el usuario escribe algo, verificamos si
//   // los campos del formulario son válidos.

//   if (mail.validity.valid) {
//     // En caso de que haya un mensaje de error visible, si el campo
//     // es válido, eliminamos el mensaje de error.
//     mailError.innerHTML = ''; // Restablece el contenido del mensaje
//     mailError.className = 'register-container__error'; // Restablece el estado visual del mensaje
//   } else {
//     // Si todavía hay un error, muestra el error exacto
//     showError();
//   }
// });

// form.addEventListener('submit', function (event) {
//     // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
  
//     if(!mail.validity.valid) {
//       // Si no es así, mostramos un mensaje de error apropiado
//       showError();
//       // Luego evitamos que se envíe el formulario cancelando el evento
//       event.preventDefault();
//     }
//   });
  
//   function showError() {
//     if(mail.validity.valueMissing) {
//       // Si el campo está vacío
//       // muestra el mensaje de error siguiente.
//       mailError.textContent = 'Debe introducir una dirección de correo electrónico.';
//     } else if(mail.validity.typeMismatch) {
//       // Si el campo no contiene una dirección de correo electrónico
//       // muestra el mensaje de error siguiente.
//       mailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
//     } 
//     // Establece el estilo apropiado
//     mailError.className = 'error activo';
//   }