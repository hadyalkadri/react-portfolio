const express = require('express');
const cors = require('cors');
const path = require('path')
const { send } = require('@emailjs/browser');

const hostname = 'localhost';
const port = 3002;

//we use nodemon for the development of servers. As we can modify without any need for restartingg server each time

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname + "/public")))

app.get('/my_skills', (req, res) => {
    res.sendFile('files/sample.json', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('files/about_me.json', {root: __dirname})
})
app.get('/experience', (req, res) => {
    res.sendFile('files/experience.json', {root: __dirname})
})

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})