const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
app.use(express.static('static'));
app.use(express.json());

//post route for updating value
app.post('/api/update', async (req, res) => {
    const newItem = req.body;
    io.emit('dataUpdated', newItem);
    res.status(201).send({ message: 'Data updated successfully!' });
});

//get route to default homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

//get route to view the current data displayed
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

const port = 3000
app.listen(port, () => console.log(`This app is listening on port ${port}`));