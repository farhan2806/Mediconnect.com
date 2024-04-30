document.addEventListener("DOMContentLoaded", function() {
    const skincareTips = [
        "Exfoliate your skin regularly to remove dead skin cells and promote cell turnover.",

        "Use a gentle cleanser that is suitable for your skin type to avoid stripping away natural oils.",

        "Apply a face mask once or twice a week to deep clean pores and nourish the skin.",

        "Stay hydrated by drinking plenty of water throughout the day to keep your skin hydrated from the inside out.",

        "Avoid touching your face with dirty hands to prevent the spread of bacteria and breakouts.",
        
        "Consult a dermatologist if you have persistent skin issues or concerns about your skincare routine."
    ];

    const skincareTipsList = document.getElementById("skincare-tips");
    skincareTips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        skincareTipsList.appendChild(li);
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { 
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); 
    }
});
