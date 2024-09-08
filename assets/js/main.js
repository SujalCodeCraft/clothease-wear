// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.best-selling-main-row');
//     const slides = document.querySelectorAll('.best-selling-pro-box');
    
//     let currentIndex = 1; // Start from 1 because of the cloned first slide
//     const slideCount = slides.length;
//     const slideWidth = slides[0].offsetWidth;

//     // Clone the first and last slides for smooth looping
//     const firstSlide = slides[0].cloneNode(true);
//     const lastSlide = slides[slides.length - 1].cloneNode(true);

//     slider.appendChild(firstSlide); // Append first slide at the end
//     slider.insertBefore(lastSlide, slider.firstChild); // Prepend last slide at the beginning

//     // Set initial position to the first "real" slide
//     let offset = -slideWidth;
//     slider.style.transform = `translateX(${offset}px)`;

//     function moveSlide() {
//         currentIndex++;
//         slider.style.transition = 'transform 0.5s ease-in-out';
//         slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

//         // If we're at the cloned first slide (after the last real slide)
//         if (currentIndex === slideCount + 1) {
//             setTimeout(() => {
//                 // Instantly jump back to the first real slide
//                 slider.style.transition = 'none';
//                 currentIndex = 1;
//                 slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
//             }, 500); // Match the transition duration
//         }

//         // If we're at the cloned last slide (before the first real slide)
//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 // Instantly jump back to the last real slide
//                 slider.style.transition = 'none';
//                 currentIndex = slideCount;
//                 slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
//             }, 500); // Match the transition duration
//         }
//     }

//     setInterval(moveSlide, 2000); // Change slide every 2 seconds
// });
