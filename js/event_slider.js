const sliderContent = document.querySelector('.event-slider-content');
const sliderItems = Array.from(sliderContent.children);
const indicatorContainer = document.querySelector('.event-slider-indicators');
const itemsPerView = 1;

const numberOfIndicators = Math.ceil(sliderItems.length / itemsPerView);

for (let i = 0; i < numberOfIndicators; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('event-slider-indicator');
    if (i === 0) indicator.classList.add('active');
    indicatorContainer.appendChild(indicator);
}

const indicators = Array.from(document.querySelectorAll('.event-slider-indicator'));

let currentPosition = 0;

const updateSliderPosition = () => {
    sliderContent.style.transform = `translateX(-${currentPosition * 50}%)`; 
    
    const activeIndicatorIndex = Math.floor(currentPosition / itemsPerView);
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === activeIndicatorIndex);
    });
};

setInterval(() => {
    currentPosition = (currentPosition + itemsPerView) % sliderItems.length;
    if (currentPosition + itemsPerView > sliderItems.length) {
        currentPosition = 0;
    }
    updateSliderPosition();
}, 2000);