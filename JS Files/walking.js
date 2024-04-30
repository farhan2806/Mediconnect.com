document.addEventListener("DOMContentLoaded", function() {
    const walkingTips = [
        "Choose comfortable and supportive shoes that fit well to prevent injuries and discomfort during walks.",
        "Start your walk with a 5-10 minute warm-up session to prepare your muscles and reduce the risk of injury.",
        "Keep your head up, shoulders back, and abdomen tight while walking to maintain proper posture and prevent strain.",
        "Drink water before, during, and after your walk to stay hydrated and maintain optimal performance.",
        "Gradually increase the intensity and duration of your walks over time to challenge yourself and improve fitness.",
        "Finish your walk with a 5-10 minute cool-down session to lower your heart rate and stretch your muscles."
    ];

    const walkingTipsList = document.getElementById("walking-tips");
    walkingTips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        walkingTipsList.appendChild(li);
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
