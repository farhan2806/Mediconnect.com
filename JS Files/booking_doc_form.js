document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

   
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const problem = document.getElementById('problem').value;

        
        if (name && phone && email && date && time && problem) {
            alert('Form submitted successfully!');
            
        } else {
            alert('Please fill in all fields.');
        }
    });
});