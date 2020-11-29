const form = document.getElementById('form');
var username = document.getElementById('user');
const email = document.getElementById('emailid');
const password1 = document.getElementById(passwrd1);
const password2 = document.getElementById(passwrd2);
const small = document.getElementById('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const password1Value = password1.value;
    const password2Value = password2.value;

    //checking username field
    if (usernameValue == "") {
        showError(username, "Username field cannot be blank");
    } else if (usernameValue.match(/^[a-z)-9]+$/g)) {
        showSuccess(username);
    } else {
        showError(username, "Not Valid");
    }

    //checking password field
    if (password1Value == password2Value) {
        showSuccess(password1);
        showSuccess(password2);
    } else {
        showError(password1, "Password does not match");
        showError(password2, "Password does not match");
    }
    if (password1Value.trim() === "") {
        showError(password1, "Password field cannot be blank");
    }
    if (password2Value.trim() === "") {
        showError(password2, "Password field cannot be blank");
    }

    //checking email address field 
    if (emailValue === "") {
        showError(email, "This field cannot be blank");
    } else if (emailValue.match(/^[\w-\.]+@([\w-]+\.)+com$/g)) {
        showSuccess(email);
    } else {
        showError(email, "Not Valid");
    }
}

//functions
function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = "form-container error";
    const small = formControl.querySelector('small');
    small.innerHTML = msg;

}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-container success";
}