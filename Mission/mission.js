
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#333";
        logo.setAttribute('src', 'byui-logo-white.png');
        document.body.style.color = "white";

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        logo.setAttribute('src', 'byui-logo-blue.webp');
        document.body.style.color = "black";
    }
}           
                    