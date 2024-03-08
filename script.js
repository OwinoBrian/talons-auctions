// Function to animate the KPIs
function animateKPIs() {
    let salesConversionRate = 0;
    let numberOfClients = 0;
    let assetsSold = 0;

    const salesConversionRateElement = document.getElementById('salesConversionRate');
    const numberOfClientsElement = document.getElementById('numberOfClients');
    const assetsSoldElement = document.getElementById('assetsSold');

    const startTime = Date.now(); // Record the start time

    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        // Calculate the progress ratio based on elapsed time
        const progressRatio = elapsedTime / 3000; // 5000 milliseconds (5 seconds) to reach the limits

        // Update KPI values based on progress ratio
        salesConversionRate = Math.min(90, progressRatio * 90);
        numberOfClients = Math.min(15, progressRatio * 15);
        assetsSold = Math.min(2500, progressRatio * 2500);

        // Update KPI elements
        salesConversionRateElement.textContent = Math.round(salesConversionRate);
        numberOfClientsElement.textContent = Math.round(numberOfClients);
        assetsSoldElement.textContent = Math.round(assetsSold);

        // Check if all KPIs have reached their desired values
        if (salesConversionRate >= 90 && numberOfClients >= 15 && assetsSold >= 2500) {
            clearInterval(intervalId); // Stop the animation when all conditions are met
        }
    }, 100); // Update every 100 milliseconds
}

// Function to check if the "About Us" section is in view
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle click event on navigation links
function handleNavLinkClick(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetId = event.target.getAttribute('href').substring(1); // Get target element ID
    const targetElement = document.getElementById(targetId); // Get the target element

    if (targetElement) {
        // Scroll to the target element with smooth behavior
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // If the target element is the "About Us" section, start the KPI animation
        if (targetId === 'about') {
            animateKPIs();
        }
    }
}

// Add event listeners for click events on all navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});

// Add event listener for scroll event to trigger animation
window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    if (isInViewport(aboutSection)) {
        animateKPIs(); // Start animation when "About Us" section is in view
    }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.image-text-container');

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'flex';
            slide.style.width = '100%';
        } else {
            slide.style.display = 'none';
        }
    });
}
