var $ = function (id) { return document.getElementById(id); };
var _ = function (name) { return document.getElementsByName(name); };
var stringNumberReg = `^[a-zA-Z0-9-]*$`;
var emailReg = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
var phoneReg = '^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$';
var allErrors = [];


const isEmpty = (userString) => {
    var str = userString.trim().length;
    return !str;
};

const isError = (id, message) => {
    var name = id.replace("Error", "");
    $(id).innerText = `\u26a0 ${message}`;
    allErrors.push((name)[0]);
}

const isValid = (id) => {
    var name = id.replace("Error", "");
    var ele = _(name)[0];

    $(id).innerText = "";

    var index = allErrors.indexOf(ele);
    if (index > -1) {
        allErrors.splice(index, 1);
    }

}

const validateUserName = (userName) => {
    if (isEmpty(userName)) {
        isError('userNameError', "User Name must be entered!");
    } else if (!userName.match(stringNumberReg)) {
        isError('userNameError', "User name can only be letters and numbers!");
    } else {
        isValid("userNameError");
    }
}

const validatePassword = (password) => {
    if (isEmpty(password)) {
        isError('passwordError', "Password is required!");
    } else if (password.length < 8) {
        isError('passwordError', "Password must be greater than 8 characters!");
    } else {
        isValid("passwordError");
    }
}

const validateVerify = (verify, password) => {
    if (isEmpty(verify)) {
        isError('passwordVerifyError', "A Password must be entered!");
    }
    else if (verify !== password) {
        isError('passwordVerifyError', "Passwords do not match!");
    } else {
        isValid('passwordVerifyError');
    }
}

const validateFirstName = (firstName) => {
    if (isEmpty(firstName)) {
        isError('firstNameError', "First name is required!");
    } else {
        isValid('firstNameError');
    }
}

const validateLastName = (lastName) => {
        if (isEmpty(lastName)) {
            isError('lastNameError', "Last name is required!");
        } else {
            isValid('lastNameError');
        }
}

const validateEmail = (email) => {
    if (isEmpty(email)) {
        isError('emailError', "Email is required!");
    } else if (!email.match(emailReg) ) {
        isError('emailError', 'Valid email must be entered!')

    } else {
        isValid('emailError');
    }
}

const validatePhone = (phone) => {
    if (isEmpty(phone)) {
        isError('phoneNumberError', "Phone number is required!");
    } else if (!phone.match(phoneReg) ) {
        isError('phoneNumberError', 'Valid Phone number is required!')

    } else {
        isValid('phoneNumberError');
    }
}

function validateFields(form) {
        $('validateForm').addEventListener('submit', function (event) {
            event.preventDefault();
        });

        allErrors = [];

        validateUserName(form.userName.value);
        validatePassword(form.password.value);
        validateVerify(form.passwordVerify.value, form.password.value);
        validateFirstName(form.firstName.value);
        validateLastName(form.lastName.value);
        validateEmail(form.email.value);
        validatePhone(form.phoneNumber.value);


        if (allErrors.length === 0) {
            getFormData('validateForm');
            window.location.href = 'confirm.html';
            return false;
        } else {
            allErrors[0].focus();
            return false;
        }

}