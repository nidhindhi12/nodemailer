const nodemailer = require('nodemailer');
const { email, password } = require('./config')



console.log(email);
console.log(password)
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: password,
    },
});
const sentmail = async (to, sub, text, html) => {
    const mailbox = {
        from: email,
        to: to,
        subject: sub,
        text: text,
        html: html
    }
    try {
        const mailinfo = await transporter.sendMail(mailbox);
        // console.log(mailinfo)
        return true;
    } catch (error) {
        console.log(error);
    }
}

module.exports = sentmail;

