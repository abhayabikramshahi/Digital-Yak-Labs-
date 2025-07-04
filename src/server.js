const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any SMTP service
  auth: {
    user: 'abhayabikramshahiofficial@gmail.com', // Replace with your email
    pass: 'abhaya@123', // Replace with your email password or app password
  },
});

// API endpoint to handle form submission
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email, // User-provided email address
    to: 'abhayabikramshahiofficial@gmail.com', // Replace with your email address
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending mail:', error);
      return res.status(500).send({ error: 'Failed to send message' });
    }
    console.log('Mail sent:', info.response);
    res.status(200).send({ message: 'Message sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
