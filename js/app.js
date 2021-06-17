let username = document.getElementById('username');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');



username.addEventListener('blur',validateUsername);
email.addEventListener('blur', validateEmail);
mobile.addEventListener('blur', validateMobile);

// for validation of username
function validateUsername (){
    let regex = /^[A-Z][0-9a-zA-Z]{1,10}$/;
    let str = username.value;
    if(regex.test(str)){
        let error_username = document.querySelector('.error-username');
        error_username.innerHTML = ``;
        username.style.border='2px solid #4aa96c';
    }
    else{
        let error = 'username must start with capital latter can include a-z A-Z 0-9 and length shoud not be more than 10 characters';
        let error_username = document.querySelector('.error-username');
        error_username.innerHTML = error;
        username.style.border='2px solid #f55c47';
    }
   
}

//for validation for email
function validateEmail(){
    let regex = /^[a-z][a-zA-Z0-9.]{1,20}[@][a-z]{1,10}[.][a-z]{1,10}$/;
    let str = email.value;
    if(regex.test(str)){
        let error_email = document.querySelector('.error-email');
        error_email.innerHTML = ``;
        email.style.border='2px solid #4aa96c';
    }
    else{
        let error = 'must include @ and . please enter valid email';
        let error_email = document.querySelector('.error-email');
        error_email.innerHTML = error;
        email.style.border='2px solid #f55c47';
    }
}

// for validation for mobile
function validateMobile(){
    let regex = /^[5-9][0-9]{9}$/;
    let str = mobile.value;
    if(regex.test(str)){
        let error_mobile = document.querySelector('.error-mobile');
        error_mobile.innerHTML = ``;
        mobile.style.border='2px solid #4aa96c';
    }
    else{
        let error = 'please enter valid mobile number';
        let error_mobile = document.querySelector('.error-mobile');
        error_mobile.innerHTML = error;
        mobile.style.border='2px solid #f55c47';
    }
}