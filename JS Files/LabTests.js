document.addEventListener("DOMContentLoaded", function () {
    // AOS initialization
    AOS.init({
        duration: 700,
        disable: function () {
            var maxWidth = 1200;
            return window.innerWidth < maxWidth;
        }
    });

    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const inner = document.querySelector('.carousel-inner');

    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth;
        inner.style.transition = 'transform 0.3s ease';
        inner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < inner.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initial update to ensure carousel starts at the correct position
    updateCarousel();
});
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 700 // Set the default animation duration
    });

    // Disable AOS on screens narrower than 1200px
    AOS.init({
        disable: function () {
            var maxWidth = 1200;
            return window.innerWidth < maxWidth;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const hiddenContent = this.nextElementSibling;
            hiddenContent.classList.toggle('show');
            if (hiddenContent.classList.contains('show')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });
});

function testform() {
    window.location.href = 'labform.html'
}

