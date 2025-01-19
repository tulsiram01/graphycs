//slider
const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('dot');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    showSlide(currentIndex);
}

let autoSlideInterval = setInterval(autoSlide, 3000);

prev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
    autoSlideInterval = setInterval(autoSlide, 3000);
});

next.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
    autoSlideInterval = setInterval(autoSlide, 3000);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentIndex = parseInt(dot.dataset.index);
        showSlide(currentIndex);
        autoSlideInterval = setInterval(autoSlide, 9000);
    });
});
     