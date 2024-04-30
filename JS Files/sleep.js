document.addEventListener("DOMContentLoaded", function() {
    const sleepTips = [
        "Establish a regular sleep schedule by going to bed and waking up at the same time each day, even on weekends.",
        "Create a relaxing bedtime routine to signal to your body that it's time to wind down and prepare for sleep.",
        "Make your sleep environment comfortable, quiet, and dark, and maintain a cool temperature for optimal sleep.",
        "Avoid screens (such as phones, tablets, and computers) at least an hour before bedtime, as the blue light emitted can disrupt sleep patterns.",
        "Avoid caffeine and heavy meals close to bedtime, as they can interfere with your ability to fall asleep and stay asleep.",
        "Manage stress and anxiety through relaxation techniques such as deep breathing, meditation, or gentle yoga before bed."
    ];

    const sleepTipsList = document.getElementById("sleep-tips");
    sleepTips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        sleepTipsList.appendChild(li);
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
