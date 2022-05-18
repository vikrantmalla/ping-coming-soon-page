const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form['email'].value.trim();


    if (email === '') {
        setErrorMsg('email', 'Please provide a email');
    } else if (!isValid(email)) {
        setErrorMsg('email', 'Please provide a valid email address');
    } else {
        removeErrorMsg('email');
    }
})

function setErrorMsg(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeErrorMsg(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}