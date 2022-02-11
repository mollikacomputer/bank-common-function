document.getElementById('login-submit').addEventListener('click', function(){
    // console.log('click button');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // has some problem
    if(userEmail == 'ranjit@gmail.com' && userPassword == 'ranjit'){
        window.location.href = 'banking.html';
    }else{
        console.log('please enter valid password');
    }
})

