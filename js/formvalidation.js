let form = document.getElementById('form');
let fullName = document.getElementsByName('fullname');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phonenumber');
let cardNumber = document.getElementById('cardnumber');
let cvv = document.getElementById('cvv');
let expireDate = document.getElementById('expiredate');
let postalCode = document.getElementById('postalcode');
let addressCode = document.getElementById('address');
let error = document.getElementsByClassName('error');

form.addEventListener('input', (event) => {
    for (let i = 0; i < fullName.length; i++) {
        if (event.target === fullName[i]) {
            if (!nameValid(event.target.value)) {
                event.target.style.border = '1px solid red';
                event.target.style.borderBottom = '2px solid #000000';
                error[i].innerText = 'Enter a valid last name: a-z A-Z.';
            } else {
                event.target.style.border = 0;
                event.target.style.borderBottom = '1px solid #000000';
                error[i].innerText = '';
            }
        }
    }

    if(event.target === email) {
        if (!emailValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[2].innerText = 'Enter a valid email !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[2].innerText = '';
        }
    } else if (event.target === phoneNumber) {
        if (!phoneValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[3].innerText = 'Enter a valid phone number !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[3].innerText = '';
        }
    } else if(event.target === cardNumber) {
        if (!cardNumberValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[4].innerText = 'Enter a valid ssn !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[4].innerText = '';
        }
    }else if(event.target === cvv) {
        if (!cvvValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[5].innerText = 'Enter a valid cvv !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[5].innerText = '';
        }
    }else if(event.target === expireDate) {
        if (!expireDateValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[6].innerText = 'Enter a valid expire date !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[6].innerText = '';
        }
    }else if(event.target === postalCode) {
        if (!postalCodeValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[7].innerText = 'Enter a valid postal code !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[7].innerText = '';
        }
    }else if(event.target === addressCode) {
        if (!addressValid(event.target.value)) {
            event.target.style.border = '1px solid red';
            event.target.style.borderBottom = '2px solid #000000';
            error[8].innerText = 'Enter a valid address !';
        } else {
            event.target.style.border = 0;
            event.target.style.borderBottom = '1px solid #000000';
            error[8].innerText = '';
        }
    }

})


function nameValid(fullName) {
    const name = /^[a-zA-Z]{3,25}$/;
    return name.test(fullName);
}

function emailValid(fullEmail) {
    const email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]/;
    return email.test(fullEmail);
}

function phoneValid(fullPhone) {
    const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phone.test(fullPhone);
}

function cardNumberValid(fullCardNumber) {
    const cardNumber = /[0-8]{4}-[0-8]{4}-[0-8]{4}/;
    return cardNumber.test(fullCardNumber);
}

function cvvValid(fullcvv) {
    const cvv = /[0-8]{4}/;
    return cvv.test(cvv);
}

function expireDateValid(expireDate) {
    const expire = /[0-8]{4}/;
    return expire.test(expireDate);
}

function postalCodeValid(postalCode) {
    const postal = /[0-9/0-9]/;
    return postal.test(postalCode);
}

function addressValid(addressCode) {
    const address = /[0-9]/;
    return address.test(addressCode);
}