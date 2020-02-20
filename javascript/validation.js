function getValues(){

    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const mail = document.getElementById("mail");
    const password = document.getElementById("password");
    const buttonSend = document.getElementById("button_send");

    const form  = document.getElementById("form");

    const error = document.getElementsByClassName("register-container__error");
    form.addEventListener('submit',validationForm(error),false);

}
    
function validationForm(error) {

    
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail.value)){
        console.log("La dirección de email " + mail.value + " es correcta.");
        error[2].style.display = "none";
       } else {
           console.log("La dirección de email es invalida ");
           error[2].style.display = "initial";
    }
  }




