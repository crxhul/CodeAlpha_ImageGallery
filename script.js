let currentIndex = 0;
let images = [];

document.addEventListener('DOMContentLoaded', () => {
    images = document.querySelectorAll('.gallery img');
});

function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}
