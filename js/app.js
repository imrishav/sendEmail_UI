//Variables
const sendBtn = document.getElementById("sendBtn");
const resetBtn = document.getElementById("resetBtn"),
      email =   document.getElementById("email"),
      subject = document.getElementById("subject"),
      message = document.getElementById("message"),
      sendEmailForm = document.getElementById('email-form');
// Event Listeners 

eventListners();

function eventListners(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    email.addEventListener("blur", validateField);
    subject.addEventListener("blur", validateField);
    message.addEventListener("blur", validateField);
    sendEmailForm.addEventListener("submit", sendEmail);

    // Send Email and reset

    resetBtn.addEventListener('click',resetForm);



}



// Functions

function appInit(){
    //Disable send button
    sendBtn.disabled = true;
    // resetBtn.disabled = true;
}

function sendEmail(e){
    e.preventDefault();
    // Show The spinner

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // Show theimage

    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block'; 

    // Hide Spinner and then show send email

    setTimeout(function(){
        //Hide the Spinner
        spinner.style.display = 'none';   

        //show image

        document.querySelector('#loaders').appendChild(sendEmailImg);
    }, 3000);
}

//Validate Fields

function validateField(){
    let errors;

    // Validate Lenght of the FIelds

    validateLength(this);
     
    //Valudate Email

    if(this.type === 'email'){
        validateEmail(this);
    }

    // Both will retrn Errors

    errors = document.querySelectorAll('.error');

    //Check if Inputs are not empty basicallyfor the Submit Button

    if(email.value != '' && subject.value != '' && message.value != '' ){
        if(errors.length === 0){
            sendBtn.disabled = false; 
        }
    }
}

// Validating Length
function validateLength(field){ 

    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error'); 
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Validate Email 

function validateEmail(field){
    let emailText = field.value;

    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error'); 
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Reset For,

function resetForm(){
    sendEmailForm.reset(); 
}