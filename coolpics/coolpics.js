const gallery = document.querySelector('.gallery');
const dialog = document.querySelector('dialog');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close-viewer'); 

// Event listener for opening the dialog
gallery.addEventListener('click', openDialog);

function openDialog(e)  {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm','full');

    dialogImage.src = full;
    dialogImage.alt - alt;

    dialog.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

// Menu toggle
const btn = document.querySelector('.menu');
const menu = document.querySelector('.longmenu');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show');  
}