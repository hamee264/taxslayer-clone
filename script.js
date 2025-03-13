document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Toggle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent menu from closing when clicking inside
            dropdown.classList.toggle("active");
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("active");
            dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
        }
    });
});
let index = 0;
function showSlide() {
    const slides = document.querySelector('.carousel-inner');
    slides.style.transform = `translateX(${-index * 70}vw)`;
}
function nextSlide() {
    const totalSlides = document.querySelectorAll('.card-items').length;
    index = (index + 1) % totalSlides;
    showSlide();
}
function prevSlide() {
    const totalSlides = document.querySelectorAll('.card-items').length;
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}

const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
const cardWidth = document.querySelector('.card-items').offsetWidth + 20; // Adjusting for gap
const maxScroll = carouselInner.scrollWidth - carouselInner.clientWidth;

// Move Carousel
function scrollCarousel(direction) {
    if (direction === 'next') {
        scrollAmount += cardWidth;
        if (scrollAmount > maxScroll) scrollAmount = 0; // Loop back
    } else {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) scrollAmount = maxScroll; // Loop back
    }
    carouselInner.style.transform = `translateX(-${scrollAmount}px)`;
}

// Auto-scroll every 3 seconds
let autoScroll = setInterval(() => scrollCarousel('next'), 3000);

// Button event listeners
nextBtn.addEventListener('click', () => {
    scrollCarousel('next');
    resetAutoScroll();
});
prevBtn.addEventListener('click', () => {
    scrollCarousel('prev');
    resetAutoScroll();
});

// Reset auto-scroll when button clicked
function resetAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(() => scrollCarousel('next'), 3000);
}
let site = document.querySelector("#site");

site.addEventListener("click", function () {
    let disclosures = document.getElementById("disclosures");
    disclosures.classList.toggle("show");
    
    let arrow = document.getElementById("arrow");
    if (disclosures.classList.contains("show")) {
        arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    } else {
        arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    }
});



    const headings = document.querySelectorAll("#boxheading");

    headings.forEach(heading => {
        heading.addEventListener("click", function () {
            let footContainer = this.nextElementSibling; 
            
            if (footContainer.style.display === "none" || footContainer.style.display === "") {
                footContainer.style.display = "flex";
                footContainer.style.flexDirection = "column"
            } else {
                footContainer.style.display = "none";
            }
    
            let icon = this.querySelector("i");
            icon.classList.toggle("fa-chevron-down");
            icon.classList.toggle("fa-chevron-up");
        });
    });
    

