document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent standard page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseText = document.getElementById('formResponse');

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();

        if (response.ok) {
            responseText.style.color = '#4CAF50';
            responseText.textContent = result.message;
            document.getElementById('contactForm').reset(); // Clear the form
        } else {
            responseText.style.color = '#ff4c4c';
            responseText.textContent = 'Oops! Something went wrong. Please try again.';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        responseText.style.color = '#ff4c4c';
        responseText.textContent = 'Server error. Please try again later.';
    }
});