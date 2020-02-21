function getValues(){

    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const mail = document.getElementById("mail");
    const password = document.getElementById("password");
    const button = document.getElementById("button_send");
    const form  = document.getElementById("form");

    const inputRed = document.getElementsByClassName("input");
    const error = document.getElementsByClassName("register-container__error");

    form.addEventListener('submit',validationForm(firstName,lastName,password,inputRed,button,error),false);

}
    
function validationForm(firstName,lastName,password,inputRed,button,error) {

    let errorState = false;

    /*LAST NAME VALIDATION */  
    if( firstName.value == ""){

        error[0].style.display = "initial";
        inputRed[0].classList.add('input-error');
        inputRed[0].style.margin = "0px 0px 5px 0px";
        errorState = true;
    }else{

        error[0].style.display = "none";
        inputRed[0].classList.remove('input-error');
    }

    /*LAST NAME VALIDATION */
    if( lastName.value == ""){

        error[1].style.display = "initial";
        inputRed[1].classList.add('input-error');
        inputRed[1].style.margin = "5px 0px 5px 0px";
        errorState = true;
    }else{

        error[1].style.display = "none";
        inputRed[1].classList.remove('input-error');
    }

    /*MAIL VALIDATION */
    /*Sentence to validate mail is from: https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos,
    author/user name: Mariano,
    date: 1 dic. 15 at 20:55*/
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail.value)){

        error[2].style.display = "none";
        inputRed[2].classList.remove('input-error');
       } else{

           error[2].style.display = "initial";
           inputRed[2].classList.add('input-error');
           inputRed[2].style.margin = "5px 0px 5px 0px";
           errorState = true;
    }

    /*PASSWORD VALIDATION */
    if( password.value == ""){

        error[3].style.display = "initial";
        inputRed[3].classList.add('input-error');
        inputRed[3].style.margin = "5px 0px 5px 0px";
        button.style.margin = "15px 0px 0px 0px";
        errorState = true;
    }else{

        error[3].style.display = "none";
        inputRed[3].classList.remove('input-error');
    }

    /*RETURN THE STYLES AND STATES TO THE ORIGINAL VALUES*/
    if(errorState == false){

        firstName.value = "";
        lastName.value = "";
        mail.value = "";
        password.value = "";
        inputRed[0].style.margin = "0px 0px 20px 0px";
        inputRed[1].style.margin = "0px 0px 20px 0px";
        inputRed[2].style.margin = "0px 0px 20px 0px";
        inputRed[3].style.margin = "0px 0px 20px 0px";
    }
  }




