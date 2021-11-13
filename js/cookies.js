function getFormData(form) {
     form1 = document.forms[form];
    const formData = new FormData(form1);

    console.log('starting');

    for (var key of formData.keys()) {
        document.cookie = `${key}=${formData.get(key)}`;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function displayFormData(id) {
    document.getElementById(id).innerText += `User Name = ${getCookie('userName')} \n`;
    document.getElementById(id).innerText += `Password = ${getCookie('password')} \n`;
    document.getElementById(id).innerText += `First name = ${getCookie('firstName')} \n`;
    document.getElementById(id).innerText += `Last Name = ${getCookie('lastName')} \n`;
    document.getElementById(id).innerText += `Email = ${getCookie('email')} \n`;
    document.getElementById(id).innerText += `Phone Number = ${getCookie('phoneNumber')} \n`;
    document.getElementById(id).innerText += `Newsletter = ${getCookie('signUpNewsletter')} \n`;

}