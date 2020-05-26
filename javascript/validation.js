    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const mail = document.getElementById('mail');
    const password = document.getElementById('password');
    const button = document.getElementById('button_send');

    const inputError = document.getElementsByClassName("input");
    const errorMessage = document.getElementsByClassName("register-container__error");
    const NUMBER_DATA = 4;

class form{

    constructor(){
        
        this.getData(); 
        this.validateInformation();
    }

    getData(){

        this.data = new Array(NUMBER_DATA).fill(0);
        this.dataValue = new Array(NUMBER_DATA).fill(0);
        this.dataType = new Array(NUMBER_DATA).fill(0);

        this.data = [firstName,
            lastName,
            mail,
            password];

        this.dataValue = [firstName.value,
                        lastName.value,
                        mail.value,
                        password.value];
                    
        this.dataType = [firstName.type,
            lastName.type,
            mail.type,
            password.type];
    }
    
    validateInformation(){

        this.validate = true
        for (let i = 0; i < NUMBER_DATA; i++) {
            if(this.dataValue[i] == "" && this.dataType[i] != "email"){
                
                this.invalidData(i);
            }else if(this.dataType[i] != "email"){
                
                this.validData(i);
            }

            if(this.dataType[i] == "email" && !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(this.dataValue[i]))){
                /*MAIL VALIDATION */
                //     /*Sentence to validate mail is from: https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos,
                //     author/user name: Mariano,
                //     date: 1 dic. 15 at 20:55*/
                this.invalidData(i);
            }else if(i == 2){
                this.validData(i);
            }
            
        }

    }

    invalidData(posicion){

        this.validate = false;
        errorMessage[posicion].style.display = "initial";
        inputError[posicion].classList.add('input-error');
        inputError[posicion].style.margin = "0px 0px 5px 0px";
    }

    validData(posicion){

        this.validate = true
        errorMessage[posicion].style.display = "none";
        inputError[posicion].classList.remove('input-error');
        inputError[posicion].style.margin = "0px 0px 20px 0px";
        this.data[posicion].value = "";
    }
        
}

function getValues(){

    this.form = new form();
}