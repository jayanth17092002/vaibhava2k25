const ads = [
    {
        image: '../assets/images/banner-popup1.png',
    },
    // {
    //     image: 'ad2.jpg',
    //     link: 'https://example2.com'
    // },
    // {
    //     image: 'ad3.jpg',
    //     link: 'https://example3.com'
    // }
    // Add more ads as needed
];

let currentSlide = 0;
let autoSlideInterval;

// Initialize carousel
function initCarousel() {
    const carousel = document.getElementById('adCarousel');
    const dotsContainer = document.getElementById('dotsContainer');
    
    // Create slides
    ads.forEach((ad, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'ad-slide';
        slide.innerHTML = `
            <a href="${ad.link}" target="_blank">
                <img src="${ad.image}" alt="Advertisement ${index + 1}" class="ad-image">
            </a>
        `;
        carousel.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    updateDots();
    startAutoSlide();
}

// Change slide
function changeSlide(direction) {
    stopAutoSlide();
    currentSlide = (currentSlide + direction + ads.length) % ads.length;
    updateCarousel();
    startAutoSlide();
}

// Go to specific slide
function goToSlide(index) {
    stopAutoSlide();
    currentSlide = index;
    updateCarousel();
    startAutoSlide();
}

// Update carousel position
function updateCarousel() {
    const carousel = document.getElementById('adCarousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Update navigation dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % ads.length;
        updateCarousel();
    }, 3000); // Changed to 3 seconds (3000 milliseconds)
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Show ad when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('adPopup').style.display = 'block';
        initCarousel();
    }, 1000);
});

function closeAd() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('adPopup').style.display = 'none';
    stopAutoSlide();
}