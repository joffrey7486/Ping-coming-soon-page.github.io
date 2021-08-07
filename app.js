function validateEmail(email){
    // définir les variables
    const regExp =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validEmail = regExp.test(email);

    // function with true or false 
    if(validEmail == true) { 
        let email = document.getElementById('email');
        let error_msg = document.getElementById('error_msg')  
        error_msg.style.display = 'none'
    } else {
        let email = document.getElementById('email');
        email.style.border = '2px solid hsl(0,100%,50%)'
        let error_msg = document.getElementById('error_msg')
        error_msg.style.display = "inline-block"
    }
}







