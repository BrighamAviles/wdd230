function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var message = document.getElementById("confirm_message");

    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match");
        message.innerHTML = "Passwords do not match";
        password.value = "";
        confirm_password.value = "";
    } else {
        confirm_password.setCustomValidity("");
        message.innerHTML = "";
    }
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function getLastModifiedDate() {
    return document.lastModified;
}

function updateFooter() {

    document.querySelector('footer p:first-of-type').innerHTML = "&copy; " + getCurrentYear() + " Your Name, Your Country";


    document.getElementById("lastModified").innerText = "Last modified: " + getLastModifiedDate();
}


window.onload = function () {
    updateFooter();
};

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});