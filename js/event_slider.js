const sliderContent = document.querySelector('.event-slider-content');
    const sliderItems = Array.from(sliderContent.children);
    const indicatorContainer = document.querySelector('.event-slider-indicators');
    
    // Function to determine items per view based on screen width
    const getItemsPerView = () => {
        return window.innerWidth <= 768 ? 1 : 2;
    };

    let itemsPerView = getItemsPerView();

    // Update indicators based on items per view
    const updateIndicators = () => {
        indicatorContainer.innerHTML = ''; // Clear existing indicators
        const numberOfIndicators = Math.ceil(sliderItems.length / itemsPerView);

        for (let i = 0; i < numberOfIndicators; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('event-slider-indicator');
            if (i === 0) indicator.classList.add('active');
            indicatorContainer.appendChild(indicator);
        }
    };

    updateIndicators();
    const indicators = Array.from(document.querySelectorAll('.event-slider-indicator'));

    let currentPosition = 0;
    
    const updateSliderPosition = () => {
        const slidePercentage = (100 / itemsPerView);
        sliderContent.style.transform = `translateX(-${currentPosition * slidePercentage}%)`; 
        
        const activeIndicatorIndex = Math.floor(currentPosition / itemsPerView);
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndicatorIndex);
        });
    };

    // Handle window resize
    window.addEventListener('resize', () => {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            itemsPerView = newItemsPerView;
            currentPosition = 0; // Reset position
            updateIndicators();
            updateSliderPosition();
        }
    });

    setInterval(() => {
        currentPosition = (currentPosition + itemsPerView) % sliderItems.length;
        if (currentPosition + itemsPerView > sliderItems.length) {
            currentPosition = 0;
        }
        updateSliderPosition();
    }, 2000);