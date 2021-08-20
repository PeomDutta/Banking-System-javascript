document.getElementById("login-submit").addEventListener('click', function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if (userEmail == 'peomd@gmail.com' && userPassword == 'bank') {
        const para = document.getElementById("pass-check")
        para.innerText = '✅ Access Given';
        window.location.href = 'banking.html';
    }
    else {
        const para = document.getElementById("pass-check")
        para.innerText = '❌ Access Denied, Try Again';

    }

    emailField.value = "";
    passwordField.value = "";
})