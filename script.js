/**
 * Portfolio - Shamshad
 * JavaScript for Interactive Components
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Slider Setup
    // Ensure the first image of each slider is visible on load
    const sliders = document.querySelectorAll('.project-slider');
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-img');
        if (images.length > 0) {
            images[0].classList.add('active');
        }
    });

    // 2. Form Submission Handling (Mock)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message, Shamshad will get back to you soon!');
            contactForm.reset();
        });
    }

    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            navbar.style.padding = '5px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '0';
        }
    });
});

/**
 * Switch to the next project screenshot
 */
function nextSlide(button) {
    const slider = button.closest('.project-slider');
    const images = slider.querySelectorAll('.slider-img');
    let activeIndex = -1;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
            img.classList.remove('active');
        }
    });

    const nextIndex = (activeIndex + 1) % images.length;
    images[nextIndex].classList.add('active');
}

/**
 * Switch to the previous project screenshot
 */
function prevSlide(button) {
    const slider = button.closest('.project-slider');
    const images = slider.querySelectorAll('.slider-img');
    let activeIndex = -1;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
            img.classList.remove('active');
        }
    });

    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    images[prevIndex].classList.add('active');
}
