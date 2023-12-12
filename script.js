(function() {
    // Initialize Email.js with your public key
    emailjs.init('CjbDcD2g5YO6tZSb8');
})();

// Move the form-related code outside the IIFE
document.addEventListener('DOMContentLoaded', function() {
// Attach an event listener to the "Send Mail" button
document.getElementById('sendMailBtn').addEventListener('click', function() {
// Disable the button to prevent multiple submissions
document.getElementById('sendMailBtn').disabled = true;
// Get form values
var formData = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
};

    // Send email using Email.js
    emailjs.send('service_l56i7s1', 'template_0zhl1se', formData)
            .then(function(response) {
                console.log('Email sent successfully', response);
            }, function(error) {
                console.log('Email sending failed', error);
            })
            .finally(function() {
                // Re-enable the button after the email is sent or an error occurs
                document.getElementById('sendMailBtn').disabled = false;
            });
    });
});