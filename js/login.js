
document.getElementById('btn-submit').addEventListener('click', function () {
    //check email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    //Denger: verify email

    if (email === 'sotan@bap.com' && pass === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid login!!!!!!')
    }

})