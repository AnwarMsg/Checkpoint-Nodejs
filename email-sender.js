const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
    },
});

const mailOptions = {
    from: 'email@gmail.com',
    to: 'email@example.com',
    subject: 'Test E-Mail',
    text: 'This is a test email.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.error(error);
} else {
    console.log('Email sent: ' + info.response);
}
});