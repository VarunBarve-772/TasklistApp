let user = {};

// Getting tr elements
let name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    gender = document.querySelector('#gender'),
    heading = document.querySelector('#userHello'),
    table = document.querySelector('#userInfo');

// Checking if there user data is in local storage or not
if(localStorage.getItem('userInfo')) {
   user = JSON.parse(localStorage.getItem('userInfo')); 
}
(function() {
    if(user !== {}) {
        heading.innerHTML = `Hello<em> ${user.fname} ${user.lname}!!</em>`
        name.textContent = user.fname + " " + user.lname;
        email.textContent = user.email;
        phone.textContent = user.phone;
        gender.textContent = user.gender;
    } else {
        table.innerHTML = `<h2 class="w3-text-red">Please Register</h2>`;
    }
})();