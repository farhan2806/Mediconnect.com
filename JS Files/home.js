var typed = new Typed('#element', {
    strings: ['Book your Doctor', 'Schedule LabTest', 'Order Medicines'],
    typeSpeed: 50,
});


function openLogIn() {
    window.location.href = 'login.php'
}

doctor = document.getElementById("BookDoctorHome")
doctor.addEventListener('click', () => {
    window.location.href = 'book_doc.html'
})

doctor = document.getElementById("MentalHealth")
doctor.addEventListener('click', () => {
    window.location.href = 'healthProblems.html'
})

medicine = document.getElementById("medicines")
medicine.addEventListener('click', () => {
    window.location.href = 'medicine.html'
})

testing = document.getElementById("LabTest")
testing.addEventListener('click', () => {
    window.location.href = 'LabTests.html'
})

checkup = document.getElementById("FullCheck")
checkup.addEventListener('click', () => {
    window.location.href = 'FullBody.html'
})


// Code for search bar
// let navbar=document.querySelector('.nav');
// menubar.onclick=()=>{
//     navbar.classList.toggle('active');

// }
// window.onscroll=() =>{
//   navbar.classList.remove('active');
// }

// const searchInput = document.querySelector('input[name="search"]');

// searchInput.addEventListener('input', function() {
//     const searchTerm = this.value.trim().toLowerCase();
//     const searchResults = document.querySelectorAll('.search-result');

//     searchResults.forEach(result => {
//         const text = result.textContent.toLowerCase();
//         if (text.includes(searchTerm)) {
//             result.style.display = 'block';
//         } else {
//             result.style.display = 'none';
//         }
//     });
// });
