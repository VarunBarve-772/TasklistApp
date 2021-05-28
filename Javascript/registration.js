// JSON object
let user = {
    fname: '',
    lname: '',
    email: '',
    phone: 0,
    gender: ''
};

// Flag variables
let fnameFlag = false,
    lnameFlag = false,
    emailFlag = false,
    phoneFlag = false;

// Input fields
let fname = document.querySelector('#fname'),
    lname = document.querySelector('#lname'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    gender = document.querySelector('.w3-radio');

// Input alerts    
let fnameAlert = document.querySelector('#fnameAlert'),
    lnameAlert = document.querySelector('#lnameAlert'),
    emailAlert = document.querySelector('#emailAlert'),
    phoneAlert = document.querySelector('#phoneAlert');



// validate fname
function validateFname() {
    const name = fname.value;
    const re = /^[a-zA-Z]{2,10}$/;
  
    if(!re.test(name)) {
      showAlert(fnameAlert);
    } else {
        fnameFlag = true;
    }
}
// validate lname
function validateLname() {
    const name = lname.value;
    const re = /^[a-zA-Z]{2,10}$/;
  
    if(!re.test(name)) {
      showAlert(lnameAlert);
    } else {
        lnameFlag = true;
    }
}
// Validate email
function validateEmail() {
    const emailVal = email.value;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(emailVal)){
        showAlert(emailAlert);
    } else {
        emailFlag = true;
    } 
}
// Validate phone
function validatePhone() {
    const phoneVal = parseInt(phone.value);
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phoneVal)){
        showAlert(phoneAlert);
    } else {
        phoneFlag = true;
    }
}

(function() {
    lnameAlert.style.display = 'none';
    emailAlert.style.display = 'none';
    fnameAlert.style.display = 'none';
    phoneAlert.style.display = 'none';
})();

// Form validation event listeners
fname.addEventListener('blur', validateFname);
lname.addEventListener('blur', validateLname);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

// Show alert function
function showAlert(inputField) {
    inputField.style.display = 'block';
    setTimeout(function() {
        inputField.style.display = 'none';
    }, 3000);
}

// Form submission
function submitForm() {
    if(fnameFlag === true && lnameFlag === true && emailFlag === true && phoneFlag === true) {
        // Getting input values
        let fnameVal = fname.value,
            lnameVal = lname.value,
            emailVal = email.value,
            phoneVal = phone.value,
            genderVal = gender.value;
        
        user.fname = fnameVal;    
        user.lname = lnameVal;    
        user.email = emailVal;    
        user.phone = phoneVal;    
        user.gender = genderVal;    

        setStorage(user);

        return true;
    } else {
        return false;
    }
}

// Setting local storage
function setStorage() {
    localStorage.setItem('userInfo', JSON.stringify(user));
    alert('Congrates, Your are registered with us.....');
}