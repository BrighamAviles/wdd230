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