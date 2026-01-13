// Select the menu open button
const menuOpenButton = document.querySelector('#menu-open-button');
// Select the menu close button
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');




navLinks.forEach(link => {

});




//  Add click event listener to toggle the menu
menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-menu');
})


//  Add click event listener to toggle the menu
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }




});
