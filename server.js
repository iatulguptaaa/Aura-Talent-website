const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve frontend static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API Route to handle contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real production app, you would connect this to an email service (like SendGrid) or a database
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    res.status(200).json({ success: true, message: 'Thank you! Your message has been received.' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Aura Talent Solutions server is running on http://localhost:${PORT}`);
});