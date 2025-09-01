const express = require('express');
const cors = require('cors');
const sentmail = require('./utlits/Nodemailer');


const app = express();
const port = 5000;
app.use(cors())
app.use(express.json());


app.post('/sentmail', async (req, res) => {
    const { to, sub, text, html } = req.body;


    if (!to || !sub)
        return res.status(400).json({ status: false, data: { mesage: 'to and subject are null' } });

    const success = await sentmail(to, sub, text, html);
    console.log(success)
    if (success)
        res.status(200).json({ status: true, data: { message: "email sent successfully" } });
    else {
        res.status(200).json({ status: false, data: { message: "Failed to sent email" } });
    }
})
console.log("changes made ");

const startserver = async () => {
    try {

        app.listen(port, () => {
            console.log(`Server is running on a ${port}`);
        });
    }
    catch (error) {
        console.log('Failed to start server:', error)
        process.exit(1);
    }
}
startserver();
