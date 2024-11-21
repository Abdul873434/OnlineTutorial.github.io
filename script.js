// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Success message
        document.getElementById('form-response').textContent = 'Thank you for your message! We will get back to you soon.';
        document.getElementById('form-response').style.color = 'green';
        
        // Reset the form
        document.getElementById('contact-form').reset();
    } else {
        // Error message
        document.getElementById('form-response').textContent = 'Please fill in all fields.';
        document.getElementById('form-response').style.color = 'red';
    }
});

// Enrollment Form Submission Handler
document.getElementById('enrollment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const course = document.getElementById('course').value;
    const topic = document.getElementById('topic').value;

    // Check if all fields are filled
    if (course && topic) {
        // Success message
        document.getElementById('enroll-response').textContent = `You have successfully enrolled in ${course} with topic: ${topic}.`;
        document.getElementById('enroll-response').style.color = 'green';
        
        // Reset the form
        document.getElementById('enrollment-form').reset();
    } else {
        // Error message
        document.getElementById('enroll-response').textContent = 'Please fill in all fields.';
        document.getElementById('enroll-response').style.color = 'red';
    }
});

// Feedback Form Submission Handler
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form value
    const suggestion = document.getElementById('suggestion').value;

    // Check if the suggestion field is filled
    if (suggestion) {
        // Success message
        document.getElementById('feedback-response').textContent = 'Thank you for your suggestion! We will consider it for future lessons.';
        document.getElementById('feedback-response').style.color = 'green';
        
        // Reset the form
        document.getElementById('feedback-form').reset();
    } else {
        // Error message
        document.getElementById('feedback-response').textContent = 'Please provide a suggestion.';
        document.getElementById('feedback-response').style.color = 'red';
    }
});
