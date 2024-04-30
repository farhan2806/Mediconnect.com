var typed = new Typed('.element', {
    strings: ['Doctors: now at your doorstep...'],
    typeSpeed: 50,
});

console.log("connected")

function DoctorFrom() {
    console.log("here")
    window.location.href = 'booking_doc_form.php'
}

// const book=document.getElementsByClassName(".DocForm")
// book.addEventListener('click',()=>{
//     console.log("here")
//     window.location.href = 'booking_doc_form.php'
// });
