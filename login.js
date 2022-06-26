const inputs = document.querySelectorAll('.input');

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('spanActive');    
}

const handleFocusOut = ({target}) => {

    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('spanActive');
    }    
}

const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8) {
        document.querySelector('.loginButton').removeAttribute('disabled');
    }
    else{
        document.querySelector('.loginButton').setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
